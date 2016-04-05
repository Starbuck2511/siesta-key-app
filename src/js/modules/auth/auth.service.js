/**=========================================================
 * Module: AuthService
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('naut')
        .factory('auth', ['$q', '$http', 'AUTH_ENDPOINT', function ($q, $http, AUTH_ENDPOINT) {

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
                $http.defaults.headers.common['X-Auth-Token'] = authToken;
            }

            function destroyUserCredentials() {
                authToken = undefined;
                userIsAuthenticated = false;
                $http.defaults.headers.common.Authorization = undefined;
                window.localStorage.removeItem(localTokenKey);
            }

            var register = function (user) {
                return $q(function (resolve, reject) {
                    $http.post(AUTH_ENDPOINT.signupUrl, user).then(function (result) {
                        if (200 === result.status) {
                            resolve(result.data.msg);
                        } else {
                            reject(result.data.msg);
                        }
                    });
                });
            };

            var login = function (username, password) {
                return $q(function (resolve, reject) {
                    var login = 'username=' + username + '&password=' + password;
                    $http.post(AUTH_ENDPOINT.loginUrl, login).then(function (result) {
                        if (200 === result.status) {
                            storeUserCredentials(result.data.authToken);
                            resolve(result.statusText);
                        } else {
                            reject(result.statusText);
                        }
                    }, function(result) {
                        reject(result.statusText);
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
        .factory('AuthInterceptor', ['$rootScope', '$q', 'AUTH_EVENTS', function ($rootScope, $q, AUTH_EVENTS) {
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
