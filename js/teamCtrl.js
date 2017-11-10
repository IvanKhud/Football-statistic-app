angular.module('mainApp').controller('teamCtrl', ['$routeParams', 'dataFactory', function ($routeParams, Data) {

  this.data = Data;
  this.idteam = $routeParams.idteam;
  this.data.getTeams();

}]);