'use strict';

require('angular/angular');
require('angular-route');

var app = angular.module('simonApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'js/templates/home.html'
  })
  .when('/about', {
    templateUrl: 'js/templates/about.html'
  })
  .when('/work', {
    templateUrl: 'js/templates/work.html'
  })
  .when('/contact', {
    templateUrl: 'js/templates/contact.html'
  })
  .when('/seekim', {
    templateUrl: 'js/templates/seekim.html'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
