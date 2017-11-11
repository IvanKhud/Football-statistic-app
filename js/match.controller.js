app.controller('matchCtrl', [
  '$scope', '$routeParams', 'dataFactory', function ($scope, $routeParams, Data) {
    $scope.data = Data;
    $scope.data.getChampionships();
    $scope.data.getMatches();
    $scope.data.getTeams();
    $scope.idmatch = $routeParams.idmatch;
  }
]);