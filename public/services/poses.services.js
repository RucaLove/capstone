
(function() {
  'use strict'

  angular.module('hibiskiss')
  .service('PosesService', service)
  service.$inject = ['$http']

  function service($http, PosesService) {
    this.allItems = function() { // Grabs all items
      return $http.get('/api/poses').then(all => {
          console.log("HAYYYY", all.data)
          return all.data
        }, err => {
          // console.log("NOOOO");
        })
    }

  }
})()
