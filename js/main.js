var app = angular.module('mainApp', ["ngRoute", "ui.bootstrap"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/championships", {
      controller: 'championshipsCtrl',
      templateUrl: 'templates/championships.template.html'
    })
    .when('/championships/:idchamp', {
    templateUrl:'templates/championship.template.html',
    controller:'championshipCtrl'
    })
    .when("/teams", {
      controller: 'teamsCtrl',
      templateUrl: 'templates/teams.template.html'
    })
    .when('/teams/:idteam', {
      templateUrl:'templates/team.template.html',
      controller:'teamCtrl'
    })
    .when("/matches", {
      controller: 'matchesCtrl',
      templateUrl: 'templates/matches.template.html'
    })
    .when("/matches/:idmatch", {
      templateUrl:'templates/match.template.html',
      controller:'matchCtrl'
    })
    .when("/about", {
      templateUrl: 'templates/about.template.html'
    })
    .otherwise({
      redirectTo: '/championships'
    });
 });
