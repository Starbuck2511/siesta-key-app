/**=========================================================
 * Module: RoutesConfig.js
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('naut')
        .config(routesConfig)
        .config(authConfig);

    routesConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider', 'RouteProvider'];
    function routesConfig($locationProvider, $stateProvider, $urlRouterProvider, Route) {

        // use the HTML5 History API
        $locationProvider.html5Mode(false);

        // Default route
        $urlRouterProvider.otherwise('/outside/login');

        // Application Routes States
        $stateProvider

            .state('outside', {
                url: '/outside',
                abstract: true,
                templateUrl: Route.base('outside.html')
            })
            .state('outside.login', {
                url: '/login',
                templateUrl: Route.base('login.html'),
                resolve: {}
            })
            .state('outside.register', {
                url: '/register',
                templateUrl: Route.base('register.html'),
                resolve: {}
            })
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: Route.base('app.html'),
                resolve: {
                    _assets: Route.require('icons', 'toaster', 'animate')
                }
            })
            .state('app.home', {
                url: '/home',
                templateUrl: Route.base('home.html'),
                resolve: {}
            })
            .state('app.groups', {
                url: '/groups',
                templateUrl: Route.base('groups.html'),
                resolve: {}
            })
            .state('app.group-add', {
                url: '/group/add',
                templateUrl: Route.base('group-add.html'),
                resolve: {}
            })

    }

    // auth interceptor configuration
    authConfig.$inject = ['$httpProvider'];
    function authConfig($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    }

})();

