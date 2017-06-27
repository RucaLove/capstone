(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('academy', {
      templateUrl: '/templates/academy.template.html', // POSES TEMPLATE
      controller: AcademyController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  AcademyController.$inject = ['$state', 'AcademyService']

  function AcademyController($state, AcademyService) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {

    }

  } // END Academy Controller
}());
