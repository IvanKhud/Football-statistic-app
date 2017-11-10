angular.module('mainApp', ["ngRoute", "ngSanitize", "ui.bootstrap"]);

angular.module('mainApp').config(function($routeProvider) {
  $routeProvider
    .when("/championships", {
      controller: 'championshipsCtrl',
      controllerAs: 'champL',
      templateUrl: 'templates/championships.template.html'
    })
    .when('/championships/:idchamp', {
      controller:'championshipCtrl',
      controllerAs: 'champD',
      templateUrl:'templates/championship.template.html'
    })
    .when("/teams", {
      controller: 'teamsCtrl',
      controllerAs: 'teamL',
      templateUrl: 'templates/teams.template.html'
    })
    .when('/teams/:idteam', {
      controller:'teamCtrl',
      controllerAs: 'teamD',
      templateUrl:'templates/team.template.html'
    })
    .when("/matches", {
      controller: 'matchesCtrl',
      controllerAs: 'matchL',
      templateUrl: 'templates/matches.template.html'
    })
    .when("/matches/:idmatch", {
      controller:'matchCtrl',
      controllerAs: 'matchD',
      templateUrl:'templates/match.template.html'
    })
    .when("/about", {
      templateUrl: 'templates/about.template.html'
    })
    .otherwise({
      redirectTo: '/championships'
    });
 });
