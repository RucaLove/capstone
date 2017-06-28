'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();

app.disable('x-powered-by');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const morgan = require('morgan');

switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}

app.use(bodyParser.json());
app.use(cookieParser());

const path = require('path');

app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './MDB-Free')));

// CSRF protection
// app.use((req, res, next) => {
//   if (/json/.test(req.get('Accept'))) {
//     return next();
//   }
//
//   res.sendStatus(406);
// });

const poses = require('./routes/poses');
const yoga = require('./routes/yoga');
const ayurveda = require('./routes/ayurveda');
const academy = require('./routes/academy');
const contact = require('./routes/contact');
const dosha = require('./routes/dosha');
const schedule = require('./routes/schedule');
const store = require('./routes/store');
const token = require('./routes/token');
const users = require('./routes/users');

app.use(poses);
app.use(yoga);
app.use(ayurveda);
app.use(academy);
app.use(contact);
app.use(dosha);
app.use(schedule);
app.use(store);
app.use(token);
app.use(users);

app.use((_req, res) => {
  res.sendStatus(404);
});

app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, './public')})
})

// eslint-disable-next-line max-params
app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  // eslint-disable-next-line no-console
  console.error(err.stack);
  res.sendStatus(500);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  if (app.get('env') !== 'test') {
    // eslint-disable-next-line no-console
    console.log('Listening on port', port);
  }
});

module.exports = app;
