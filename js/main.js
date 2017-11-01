var app = angular.module('mainApp', ["ngRoute"]);

app.config(function($routeProvider) {
      $routeProvider
      .when("/championships", {
          templateUrl: 'templates/championships.template.html',
     })
     .when("/teams", {
         templateUrl: 'templates/teams.template.html'
     })
     .when("/matches", {
         templateUrl: 'templates/matches.template.html'
     })
     .when("/about", {
         templateUrl: 'templates/about.template.html'
     })
      .otherwise({
        redirectTo: '/championships'
      });
 });