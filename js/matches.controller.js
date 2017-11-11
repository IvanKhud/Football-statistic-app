app.controller('matchesCtrl', [
  '$scope', 'dataFactory', function ($scope, Data) {
    $scope.data = Data;
    $scope.data.getMatches();
    $scope.data.getTeams();
    $scope.data.getChampionships();
    $scope.currentPage = 1;
  }
]);