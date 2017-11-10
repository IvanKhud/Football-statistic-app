angular.module('mainApp').controller('championshipsCtrl', ['dataFactory', function (Data) {

  this.data = Data;
  this.data.getChampionships();
  this.currentPage = 1;
  this.searchEnabled = false;

}]);