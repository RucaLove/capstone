(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('users', {
      templateUrl: '/templates/users.template.html', // POSES TEMPLATE
      controller: UsersController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  UsersController.$inject = ['$state', 'UsersService', '$stateParams', 'users']

  function UsersController($state, UsersService, $stateParams, users) {
    const vm = this
    // vm.$onInit = onInit
    vm.users = users.data;
    vm.currentUser = currentUser;

    // function onInit() {
    //
    // }

  } // END Users Controller
}());
