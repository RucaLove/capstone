(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('contact', {
      templateUrl: '/templates/contact.template.html', // POSES TEMPLATE
      controller: ContactController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  ContactController.$inject = ['$state', 'ContactService']

  function ContactController($state, ContactService) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {

    }

  } // END Contact Controller
}());
