app.controller('championshipsCtrl', ['$scope', 'dataFactory', function ($scope, Data) {

  $scope.data = Data;
  $scope.data.getChampionships();
  $scope.currentPage = 1;
  $scope.searchEnabled = false;

}]);