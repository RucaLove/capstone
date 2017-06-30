(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('quiz', {
      templateUrl: '/templates/determine-your-vikriti.template.html', // POSES TEMPLATE
      controller: QuizController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  QuizController.$inject = ['$state', 'QuizService', '$stateParams']

  function QuizController($state, QuizService, $stateParams) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      $('.tiva-timetable').hide()
    }

  } // END Quiz Controller
}());
