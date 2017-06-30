(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('calendar', {
      templateUrl: '/templates/calendar.template.html', // CALENDAR TEMPLATE
      controller: CalendarController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  CalendarController.$inject = ['$state', 'CalendarService', '$stateParams']

  function CalendarController($state, CalendarService, $stateParams) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {

    }

    // $('#calendar').datepicker({
    //     inline: true,
    //     firstDay: 1,
    //     showOtherMonths: true,
    //     dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    // });

  } // END Calendar Controller

}());
