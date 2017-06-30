(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('members', {
      templateUrl: '/templates/members.template.html', // MEMBERS TEMPLATE
      controller: MembersController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  MembersController.$inject = ['$state', 'MembersService', '$stateParams']

  function MembersController($state, MembersService, $stateParams) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {

    }

  } // END Members Controller
}());
