app.controller('teamsCtrl', ['$scope', 'dataFactory', function ($scope, Data) {

  $scope.data = Data;
  $scope.data.getTeams();
  $scope.data.getChampionships();
  $scope.currentPage = 1;

}]);