angular.module('mainApp').controller('matchesCtrl', ['dataFactory', function (Data) {

  this.data = Data;
  this.data.getMatches();
  this.data.getTeams();
  this.data.getChampionships();
  this.currentPage = 1;
  this.searchEnabled = false;

}]);