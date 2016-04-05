/**=========================================================
 * Module: LoginController.js
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('naut')
        .controller('LoginController', ['$scope', 'auth',
            function ($scope, auth) {

                $scope.login = function(username, password) {

                    auth.login(username, password).then(function(){
                        console.log('Auth success');
                    },function(){
                        console.log('Auth failure');
                    });
                };
            }]);
})();
