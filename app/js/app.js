'use strict';


// Declare app level module which depends on filters, and services
angular.module('L2WebChat', [
  'ngRoute',
  'L2WebChat.filters',
  'L2WebChat.services',
  'L2WebChat.directives',
  'L2WebChat.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/chat.html', controller: 'chatCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
