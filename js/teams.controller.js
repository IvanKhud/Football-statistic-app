app.controller('teamsCtrl', [
  '$scope', 'dataFactory', function ($scope, Data) {
  $scope.data = Data;
  $scope.data.getApi("teams", function() {
    $scope.data.loading = false;
  });
  $scope.currentPage = 1;
  }
]);