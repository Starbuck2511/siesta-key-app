/**=========================================================
 * Module: ColorsConstant.js
 =========================================================*/

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
        .constant('API_ENDPOINT', {
            url: 'http://siesta-key.local/app_dev.php'
            //  For a simulator use: url: 'http://127.0.0.1:8080/api'
        });
})();
