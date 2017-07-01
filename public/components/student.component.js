(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('student', {
      templateUrl: '/templates/student.template.html', // STUDENT TEMPLATE
      controller: StudentController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  StudentController.$inject = ['$state', 'StudentService', '$stateParams']

  function StudentController($state, StudentService, $stateParams) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      $('.tiva-timetable').hide()

    }

  } // END Student Controller
}());
