app.controller('championshipsCtrl', [
  '$scope', 'dataFactory', function ($scope, Data) {
  $scope.data = Data;
  $scope.data.getApi("championships", function() {
    $scope.data.loading = false;
  });
  $scope.currentPage = 1;
  $scope.searchEnabled = false;
}
]);