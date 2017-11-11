var app = angular.module('mainApp', ["ngRoute", "ngSanitize", "ui.bootstrap"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/championships", {
      templateUrl: 'templates/championships.template.html',
      controller: 'championshipsCtrl'
    })
    .when('/championships/:idchamp', {
      templateUrl:'templates/championship.template.html',
      controller:'championshipCtrl'
    })
    .when("/teams", {
      templateUrl: 'templates/teams.template.html',
      controller: 'teamsCtrl'
    })
    .when('/teams/:idteam', {
      templateUrl:'templates/team.template.html',
      controller:'teamCtrl'
    })
    .when("/matches", {
      templateUrl: 'templates/matches.template.html',
      controller: 'matchesCtrl'
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
