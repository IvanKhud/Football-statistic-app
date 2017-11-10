angular.module('mainApp').controller('championshipCtrl', ['$routeParams', 'dataFactory', function ($routeParams, Data) {
  
  this.data = Data;
  this.idchamp = $routeParams.idchamp;
  this.data.getChampionships();

}]);