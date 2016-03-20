/**=========================================================
 * Module: RestService
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('naut')
        .factory('rest', ['$http', 'API_ENDPOINT', function ($http, API_ENDPOINT) {

            var rest = {};

            rest.getGroups = function () {
                return $http.get(API_ENDPOINT.url + '/groups');
            };

            rest.getGroup = function (id) {
                return $http.get(API_ENDPOINT.url + '/groups/' + id);
            };

            rest.addGroup = function (group) {
                return $http.post(API_ENDPOINT.url + '/groups', group);
            };

            return rest;
        }]);


})();
