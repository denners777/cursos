var angular = require('angular');
require('angular-router-browserify')(angular);

angular.module('app', [
        'ngRoute'
    ])
        .config(function ($routeProvider) {
          $routeProvider
                  .when('/', {
                    templateUrl: 'list.html',
                    controller: 'ListCtrl'
                  })
                  .when('/insert', {
                    templateUrl: 'insert.html',
                    controller: 'InsertCtrl'
                  })
        })
        .controller('ListCtrl', function ($scope) {

        })
        .controller('InsertCtrl', function ($scope) {

        })
        .controller('AppCtrl', function ($scope) {
          $scope.test = 'Hello from Angularjs';
        });