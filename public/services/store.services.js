
(function() {
  'use strict'

  angular.module('hibiskiss')
  .service('StoreService', service)
  service.$inject = ['$http']

  function service($http) {
    this.allItems = function() { // Grabs all items
      // console.log("HELLO", StoreService)
      return $http
        .get('/api/store')
        .then(all => {
          // console.log("HAYYYY", all.data)
          return all.data
        }, err => {
          console.log("NOOOO");
        })
    }
    this.$Item = function(id) { // Grab an item by ID
      return $http.get(`/api/store/${id}`).then(one => one.data)
    }

  }
})()
