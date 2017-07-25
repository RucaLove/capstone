
(function() {
  'use strict'

  angular.module('hibiskiss')
  .service('AcademyService', service)
  service.$inject = ['$http']

  function service($http, AcademyService) {
    $http.post('/api/users', formData)
  }
})()
