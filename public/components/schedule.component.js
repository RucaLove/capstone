(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('schedule', {
      templateUrl: '/templates/schedule.template.html', // CALENDAR TEMPLATE
      controller: ScheduleController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  ScheduleController.$inject = ['$state', 'ScheduleService', '$stateParams']

  function ScheduleController($state, ScheduleService, $stateParams) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {

    }

  } // END Schedule Controller

}());
