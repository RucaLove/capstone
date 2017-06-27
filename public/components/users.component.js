(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('users', {
      templateUrl: '/templates/users.template.html', // POSES TEMPLATE
      controller: UsersController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  UsersController.$inject = ['$state', 'UsersService']

  function UsersController($state, UsersService) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {

    }

  } // END Users Controller
}());
