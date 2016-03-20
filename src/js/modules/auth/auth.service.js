/**=========================================================
 * Module: AuthService
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('naut')
        .factory('auth', ['$q', '$http', 'API_ENDPOINT', function ($q, $http, API_ENDPOINT) {

            console.dir(API_ENDPOINT);
            var auth = {};
            var localTokenKey = 'siesta-key-auth-token';
            var userIsAuthenticated = false;
            var authToken;

            function loadUserCredentials() {
                var token = window.localStorage.getItem(localTokenKey);
                if (token) {
                    useCredentials(token);
                }
            }

            function storeUserCredentials(token) {
                window.localStorage.setItem(localTokenKey, token);
                useCredentials(token);
            }

            function useCredentials(token) {
                userIsAuthenticated = true;
                authToken = token;
                // set the token as header for requests
                $http.defaults.headers.common.Authorization = authToken;
            }

            function destroyUserCredentials() {
                authToken = undefined;
                userIsAuthenticated = false;
                $http.defaults.headers.common.Authorization = undefined;
                window.localStorage.removeItem(localTokenKey);
            }

            var register = function (user) {
                return $q(function (resolve, reject) {
                    $http.post(API_ENDPOINT.url + '/signup', user).then(function (result) {
                        if (result.data.success) {
                            resolve(result.data.msg);
                        } else {
                            reject(result.data.msg);
                        }
                    });
                });
            };

            var login = function (user) {
                return $q(function (resolve, reject) {
                    $http.post(API_ENDPOINT.url + '/login', user).then(function (result) {
                        if (result.data.success) {
                            storeUserCredentials(result.data.token);
                            resolve(result.data.msg);
                        } else {
                            reject(result.data.msg);
                        }
                    });
                });
            };

            var logout = function () {
                destroyUserCredentials();
            };

            var isAuthenticated = function () {
                return userIsAuthenticated;
            };

            loadUserCredentials();

            return {
                login: login,
                register: register,
                logout: logout,
                isAuthenticated: isAuthenticated
            };

        }])

        // interceptor for auth
        .factory('AuthInterceptor', ['$rootScope', '$q', function ($rootScope, $q, AUTH_EVENTS) {
            return {
                responseError: function (response) {
                    $rootScope.$broadcast({
                        401: AUTH_EVENTS.notAuthenticated
                    }[response.status], response);
                    return $q.reject(response);
                }
            };
        }]);
})();
