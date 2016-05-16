/**=========================================================
 * Module: RegisterController.js
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('naut')
        .controller('RegisterController', ['$scope', 'auth',
            function ($scope, auth) {

                $scope.register = function(user) {

                    auth.register(user).then(function(){
                        console.log('Auth success');
                    },function(){
                        console.log('Auth failure');
                    });
                };
            }]);
})();
