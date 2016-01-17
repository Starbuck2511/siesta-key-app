/**=========================================================
 * Module: RestService
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('naut')
        .factory('rest', ['$http', function ($http) {

            var urlBase = 'http://siesta-key.local/app_dev.php';
            var rest = {};

            rest.getGroups = function () {
                return $http.get(urlBase + '/groups');
            };

            rest.getGroup = function (id) {
                return $http.get(urlBase + '/groups/' + id);
            };

            return rest;
        }]);


})();
