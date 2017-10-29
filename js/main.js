var app = angular.module('mainApp', ["ngRoute"]);

app.controller('mainCtrl', function($scope, $http) {
  $http.get("https://footballbet.com.ua/api/championships/")
  .then(function(response) {
       $scope.championships = response.data.result;
   });
  $http.get("https://footballbet.com.ua/api/teams/")
  .then(function(response) {
       $scope.teams = response.data.result;
   });
  $http.get("https://footballbet.com.ua/api/matches/")
  .then(function(response) {
       $scope.matches = response.data.result;
   });
 });

app.config(function($routeProvider) {
      $routeProvider
      .when("/championships", {
          templateUrl: 'templates/championships.template.html'
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