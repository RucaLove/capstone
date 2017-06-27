(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('quiz', {
      templateUrl: '/templates/determine-your-vikriti.template.html', // POSES TEMPLATE
      controller: QuizController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  QuizController.$inject = ['$state', 'QuizService']

  function QuizController($state, QuizService) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {

    }

  } // END Quiz Controller
}());
