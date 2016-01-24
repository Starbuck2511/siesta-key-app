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
                $scope.group;
                $scope.add = function(group) {
                    console.log('Add group ...');
                    console.dir(group);
                    console.log('Call rest service to save data in backend ...');
                    console.log('Do not submit data to backend if form is not already filled and valid...');
                    addGroup(group);
                };

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

                function addGroup(group) {
                    rest.addGroup()
                        .success(function (data) {
                            $scope.group = data;
                        })
                        .error(function (error) {
                            $scope.status = 'Unable to save group ' + error.message;
                        });
                }
            }]);
})();
