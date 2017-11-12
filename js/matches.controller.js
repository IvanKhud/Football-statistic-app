app.controller('matchesCtrl', [
  '$scope', 'dataFactory', function ($scope, Data) {
  $scope.data = Data;
  $scope.data.getApi("matches", function() {
    $scope.data.loading = false;
  });
  $scope.currentPage = 1;
  }
]);