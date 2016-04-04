/**=========================================================
 * Module: LoginController.js
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('naut')
        .controller('LoginController', ['$scope', 'rest',
            function ($scope, rest) {

                $scope.login = function() {
                    console.log('login now ...');
                };

            }]);
})();
