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

