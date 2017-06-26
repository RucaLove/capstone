(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('store', {
      templateUrl: '/templates/store.template.html', // STORE TEMPLATE
      controller: StoreController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  StoreController.$inject = ['$state', 'StoreService']

  function StoreController($state, StoreService) {
    const vm = this
    vm.$onInit = onInit
    // vm.gostore = gostore

    function onInit() {
      StoreService.allItems()
        .then((allitems) => {
          console.log("all items should be here: ", allitems)
          vm.items = allitems
        })
    }

    // function gostore() {
    //   //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
    //   // REFER TO app.config.js TO CHECK STATES & CORRESPONDING COMPONENTS
    //   $state.go('store')
    // }

  } // END StoreigationController
}());
