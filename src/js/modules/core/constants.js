(function () {
    'use strict';

    // same mq as defined in the css
    angular
        .module('naut')
        .constant('MEDIA_QUERY', {
            'desktopLG': 1200,
            'desktop': 992,
            'tablet': 768,
            'mobile': 480
        })
        .constant('AUTH_EVENTS', {
            notAuthenticated: 'auth-not-authenticated'
        })
        .constant('AUTH_ENDPOINT', {
            loginUrl: 'http://siesta-key.de/app_dev.php/login_check',
            signupUrl: 'http://siesta-key.de/app_dev.php/register/'
        })
        .constant('API_ENDPOINT', {
            url: 'http://siesta-key.de/app_dev.php/api'
            //  For a simulator use: url: 'http://127.0.0.1:8080/api'
        });
})();
