angular.module('mainApp').controller('teamsCtrl', ['dataFactory', function (Data) {

  this.data = Data;
  this.data.getTeams();
  this.data.getChampionships();
  this.currentPage = 1;
  this.searchEnabled = false;

}]);