/**=========================================================
 * Module: CoreConfig
 =========================================================*/
(function () {
    'use strict';

    angular
        .module('naut')
        .config(commonConfig)
        .config(lazyLoadConfig)
        .config(authConfig);

    // Common object accessibility
    commonConfig.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide'];
    function commonConfig($controllerProvider, $compileProvider, $filterProvider, $provide) {

        var app = angular.module('naut');
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
        app.value = $provide.value;

    }

    // Lazy load configuration
    lazyLoadConfig.$inject = ['$ocLazyLoadProvider', 'VENDOR_ASSETS'];
    function lazyLoadConfig($ocLazyLoadProvider, VENDOR_ASSETS) {

        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: VENDOR_ASSETS.modules
        });

    }

    authConfig.$inject = ['$httpProvider'];
    function authConfig($httpProvider) {
        var localTokenKey = 'siesta-key-auth-token';
        var token = window.localStorage.getItem(localTokenKey);
        $httpProvider.defaults.headers.common['X-Auth-Token'] = token;
        $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    }

})();


