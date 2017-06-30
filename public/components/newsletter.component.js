(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('newsletter', {
      templateUrl: '/templates/newsletter.template.html', // NEWSLETTER TEMPLATE
      controller: NewsletterController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  NewsletterController.$inject = ['$state', 'NewsletterService', '$stateParams']

  function NewsletterController($state, NewsletterService, $stateParams) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      $('.tiva-timetable').hide()
    }

  } // END Newsletter Controller
}());
