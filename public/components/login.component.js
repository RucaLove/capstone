(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('login', {
      templateUrl: '/templates/login.template.html', // POSES TEMPLATE
      controller: LoginController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  LoginController.$inject = ['$state', 'LoginService', '$stateParams']

  function LoginController($state, LoginService, $stateParams) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {

    }

  } // END Login Controller
}());