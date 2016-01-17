/**=========================================================
 * Module: HomeController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('HomeController', HomeController);
    
    function HomeController() {
      var vm = this;
      vm.title = 'Siesta Key App - Home';
      vm.text = 'This is the text of home ...';
    }

})();
