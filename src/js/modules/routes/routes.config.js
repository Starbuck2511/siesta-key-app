/**=========================================================
 * Module: RoutesConfig.js
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('naut')
        .config(routesConfig);

    routesConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider', 'RouteProvider'];
    function routesConfig($locationProvider, $stateProvider, $urlRouterProvider, Route) {

        // use the HTML5 History API
        $locationProvider.html5Mode(false);

        // Default route
        $urlRouterProvider.otherwise('/app/home');

        // Application Routes States
        $stateProvider
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
            .state('app.group', {
                url: '/group',
                templateUrl: Route.base('group.html'),
                resolve: {}
            })
            .state('app.group-add', {
                url: '/group/add',
                templateUrl: Route.base('group-add.html'),
                resolve: {}
            })

    }

})();

