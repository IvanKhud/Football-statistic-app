app.controller('matchesCtrl', ['$scope', 'dataFactory', function ($scope, Data) {

  $scope.data = Data;
  $scope.data.getMatches();

  $scope.currentPage = 1;

}]);