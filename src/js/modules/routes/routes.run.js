/**=========================================================
 * Module: RoutesRun
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .run(appRun);
    /* @ngInject */   
    function appRun($rootScope, $window, $state, auth, AUTH_EVENTS) {

        // auth goes here ...
        $rootScope.$on('$stateChangeStart', function (event, next, nextParams, fromState) {
            if (!auth.isAuthenticated()) {
                console.log('next name '+ next.name);
                console.log('next params ' + nextParams);
                console.log('from state ' + fromState);
                console.log('auth events  ' + AUTH_EVENTS);

                if (next.name !== 'outside.login' && next.name !== 'outside.register') {
                    event.preventDefault();
                    $state.go('outside.login');
                    console.log('go to login ...');
                }
            }
        });

      // hook not found
      $rootScope.$on('$stateNotFound',
        function(event, unfoundState, fromState, fromParams) {
            console.log(unfoundState.to); // "lazy.state"
            console.log(unfoundState.toParams); // {a:1, b:2}
            console.log(unfoundState.options); // {inherit:false} + default options
        });

      // hook success
      $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
          // success here
          // display new view from top
          $window.scrollTo(0, 0);
        });

    }
    appRun.$inject = ['$rootScope', '$window', '$state', 'auth', 'AUTH_EVENTS'];

})();

