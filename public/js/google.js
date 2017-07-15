// $(document).ready(function() {
//
//     function onSignIn(googleUser) {
//         let profile = googleUser.getBasicProfile();
//
//         let data = {
//             first_name: profile.getGivenName(),
//             last_name: profile.getFamilyName(),
//             photo: profile.getImageUrl(),
//             email: profile.getEmail()
//         }
//
//         $.ajax({
//             method: "POST",
//             url: "/",
//             data: data,
//             success: function(done) {
//                 if (done) {
//                     document.location = '/users/419';
//                 }
//             },
//             error: function(error) {
//                 console.log(error);
//             }
//         });
//
//       let accessToken = googleUser.getAuthResponse(true).access_token
//       let idToken = googleUser.getAuthResponse(true).id_token
//     }
//
//     function signOut() {
//         console.log(gapi);
//         gapi.load('auth2', function() {
//             gapi.auth2.init().then(function() {
//                 var auth2 = gapi.auth2.getAuthInstance();
//                 console.log(auth2);
//                 auth2.signOut().then(function() {
//                     auth2.disconnect();
//                     document.location = '/'
//                 });
//             })
//         });
//     };
//
//   $('.logout').click(function(event) {
//     signOut();
//   })
//
// })

// OTHER GOOGLE STUFF

// <!-- google login script 'google.js' -->
// <script src="https://apis.google.com/js/platform.js"></script>
// <meta name="google-signin-client_id" content="1037653344627-va0c0k2jbh4b1g83b133lej73nu0bclk.apps.googleusercontent.com">
//
// <script>
//
//     function signOut() {
//       var auth2 = gapi.auth2.getAuthInstance();
//       auth2.signOut().then(function () {
//         console.log('User signed out.');
//       });
//     }
//     console.log("HAYYY", gapi);
//
// </script>
//
//
// index.html
//
// <div class="row center">
//     <!-- Google OAuth -->
//     <div class="middle">
//         <!-- <div class="g-signin2" data-onsuccess="onSignIn"><h1>HELLO</h1></div> -->
//         <script>
//             var GoogleAuth;
//             var SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';
//
//             function handleClientLoad() {
//                 // Load the API's client and auth2 modules.
//                 // Call the initClient function after the modules load.
//                 gapi.load('client:auth2', initClient);
//             }
//
//             function initClient() {
//                 // Retrieve the discovery document for version 3 of Google Drive API.
//                 // In practice, your app can retrieve one or more discovery documents.
//                 var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
//
//                 // Initialize the gapi.client object, which app uses to make API requests.
//                 // Get API key and client ID from API Console.
//                 // 'scope' field specifies space-delimited list of access scopes.
//                 gapi.client.init({
//                     'apiKey': 'AIzaSyDdI6E9S1As8XVZJ8oUAnbgS_41VwZRaFY',
//                     'discoveryDocs': [discoveryUrl],
//                     'clientId': '1037653344627-va0c0k2jbh4b1g83b133lej73nu0bclk.apps.googleusercontent.com',
//                     'scope': SCOPE
//                 }).then(function() {
//                     GoogleAuth = gapi.auth2.getAuthInstance();
//                     // window.location = '/test'
//
//                     // Listen for sign-in state changes.
//                     GoogleAuth.isSignedIn.listen(updateSigninStatus);
//
//                     // Handle initial sign-in state. (Determine if user is already signed in.)
//                     var user = GoogleAuth.currentUser.get();
//                     setSigninStatus();
//
//                     // Call handleAuthClick function when user clicks on
//                     //      "Sign In/Authorize" button.
//                     $('#sign-in-or-out-button').click(function() {
//                         handleAuthClick();
//                     });
//                     $('#revoke-access-button').click(function() {
//                         revokeAccess();
//                     });
//                 });
//             }
//
//             function handleAuthClick() {
//                 if (GoogleAuth.isSignedIn.get()) {
//                     // User is authorized and has clicked 'Sign out' button.
//                     GoogleAuth.signOut();
//                 } else {
//                     // User is not signed in. Start Google auth flow.
//                     GoogleAuth.signIn();
//                 }
//             }
//
//             function revokeAccess() {
//                 GoogleAuth.disconnect();
//             }
//
//             function setSigninStatus(isSignedIn) {
//                 var user = GoogleAuth.currentUser.get();
//                 var isAuthorized = user.hasGrantedScopes(SCOPE);
//                 if (isAuthorized) {
//                     $('#sign-in-or-out-button').html('Sign out');
//                     $('#revoke-access-button').css('display', 'inline-block');
//                     $('#auth-status').html('You are currently signed in and have granted ' +
//                         'access to this app.');
//                 } else {
//                     $('#sign-in-or-out-button').html('Sign In/Authorize');
//                     $('#revoke-access-button').css('display', 'none');
//                     $('#auth-status').html('You have not authorized this app or you are ' +
//                         'signed out.');
//                 }
//             }
//
//             function updateSigninStatus(isSignedIn) {
//                 setSigninStatus();
//             }
//         </script>
//
//         <button id="sign-in-or-out-button" style="margin-left: 25px">Sign In/Authorize</button>
//         <button id="revoke-access-button" style="display: none; margin-left: 25px">Revoke access</button>
//
//         <div id="auth-status" style="display: inline; padding-left: 25px"></div>
//         <hr>
//
//         <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
//         <script async defer src="https://apis.google.com/js/api.js" onload="this.onload=function(){};handleClientLoad()" onreadystatechange="if (this.readyState === 'complete') this.onload()">
//         </script>
//     </div>
//
//     <!-- <a href="#" onclick="signOut();">Sign out</a> -->
// </div>
