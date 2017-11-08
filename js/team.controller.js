app.controller('teamCtrl', ['$scope', '$routeParams', 'dataFactory', function ($scope, $routeParams, Data) {
  $scope.data = Data;
  $scope.idteam = $routeParams.idteam;
  $scope.tId = $scope.data.getTeamId($scope.idteam);

}]);