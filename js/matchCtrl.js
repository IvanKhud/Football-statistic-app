angular.module('mainApp').controller('matchCtrl', ['$routeParams', 'dataFactory', function ($routeParams, Data) {

  this.data = Data;
  this.data.getChampionships();
  this.data.getMatches();
  this.data.getTeams();
  this.idmatch = $routeParams.idmatch;

}]);