/**=========================================================
 * Module: GroupController.js
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('naut')
        .controller('GroupController', ['$scope', 'rest',
            function ($scope, rest) {

                $scope.status;
                $scope.groups;
                $scope.title = 'List of my groups';

                getGroups();

                function getGroups() {
                    rest.getGroups()
                        .success(function (data) {
                            $scope.groups = data;
                        })
                        .error(function (error) {
                            $scope.status = 'Unable to load groups data: ' + error.message;
                        });
                }
            }]);
})();
