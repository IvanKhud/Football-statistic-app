var app = angular.module('mainApp', ["ngRoute", "ui.bootstrap"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/championships", {
      controller: 'championshipsCtrl',
      templateUrl: 'templates/championships.template.html'
    })
    .when("/teams", {
      controller: 'teamsCtrl',
      templateUrl: 'templates/teams.template.html'
    })
    .when("/matches", {
      controller: 'matchesCtrl',
      templateUrl: 'templates/matches.template.html'
    })
    .when("/about", {
      templateUrl: 'templates/about.template.html'
    })
    .otherwise({
      redirectTo: '/championships'
    });
 });
