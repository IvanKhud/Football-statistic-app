var app = angular.module('mainApp', ["ngRoute", "ngSanitize", "ui.bootstrap"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/championships", {
      controller: 'championshipsCtrl',
      templateUrl: 'templates/championships.template.html'
    })
    .when('/championships/:idchamp', {
      controller:'championshipCtrl',
      templateUrl:'templates/championship.template.html'
    })
    .when("/teams", {
      controller: 'teamsCtrl',
      templateUrl: 'templates/teams.template.html'
    })
    .when('/teams/:idteam', {
      controller:'teamCtrl',
      templateUrl:'templates/team.template.html'
    })
    .when("/matches", {
      controller: 'matchesCtrl',
      templateUrl: 'templates/matches.template.html'
    })
    .when("/matches/:idmatch", {
      controller:'matchCtrl',
      templateUrl:'templates/match.template.html'
    })
    .when("/about", {
      templateUrl: 'templates/about.template.html'
    })
    .otherwise({
      redirectTo: '/championships'
    });
 });
