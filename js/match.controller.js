app.controller('matchCtrl', [
  '$scope', '$routeParams', 'dataFactory', function ($scope, $routeParams, Data) {
  $scope.data = Data;
  $scope.idmatch = $routeParams.idmatch;
  $scope.data.getApi("championships", function() {
    $scope.data.getApi("matches", function() {
      $scope.data.getApi("teams", function() {
        $scope.data.loading = false;
      })
    })
  })
  }
]);