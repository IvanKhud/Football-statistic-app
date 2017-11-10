angular.module('mainApp').controller('TeamController', ['$routeParams', 'dataFactory', function ($routeParams, Data) {

  this.data = Data;
  this.idteam = $routeParams.idteam;
  this.getTeams();

}]);