app.controller('matchCtrl', ['$scope', '$routeParams', 'dataFactory', function ($scope, $routeParams, Data) {

  $scope.data = Data;
  $scope.idmatch = $routeParams.idmatch;

}]);