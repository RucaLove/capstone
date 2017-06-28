(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('yoga', {
      templateUrl: '/templates/yoga.template.html', // POSES TEMPLATE
      controller: YogaController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  YogaController.$inject = ['$state', 'YogaService', '$stateParams']

  function YogaController($state, YogaService, $stateParams) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {

    }

  } // END Yoga Controller
}());
