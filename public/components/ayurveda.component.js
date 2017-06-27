(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('ayurveda', {
      templateUrl: '/templates/ayurveda.template.html', // POSES TEMPLATE
      controller: AyurvedaController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  AyurvedaController.$inject = ['$state', 'AyurvedaService']

  function AyurvedaController($state, AyurvedaService) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {

    }

  } // END Ayurveda Controller
}());
