/**=========================================================
 * Module: UserService
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('naut')
        .factory('user', ['auth', function (auth) {

            var user = auth.getUserInfo();

            user.getId = function () {
                return user.id;
            };

            user.getName = function () {
                return user.name;
            };

            user.getEmail = function () {
                return user.email;
            };

            return user;
        }]);


})();
