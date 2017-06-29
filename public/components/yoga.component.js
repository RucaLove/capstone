(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('yoga', {
      templateUrl: '/templates/yoga.template.html', // YOGA TEMPLATE
      controller: YogaController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  YogaController.$inject = ['$state', 'YogaService', '$stateParams']

  function YogaController($state, YogaService, $stateParams) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      console.log("LOADED YOGA");
    }

  } // END Yoga Controller
}());
