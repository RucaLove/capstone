(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('signup', {
      templateUrl: '/templates/signup.template.html', // POSES TEMPLATE
      controller: SignupController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  SignupController.$inject = ['$state', 'SignupService', '$stateParams']

  function SignupController($state, SignupService, $stateParams) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {

    }

  } // END Signup Controller
}());
