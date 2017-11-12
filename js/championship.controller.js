app.controller('championshipCtrl', [
  '$scope', '$routeParams', 'dataFactory', function ($scope, $routeParams, Data) {  
  $scope.data = Data;
  $scope.idchamp = $routeParams.idchamp;
  $scope.data.getApi("championships", function() {
    $scope.data.loading = false;
  });
  }
]);