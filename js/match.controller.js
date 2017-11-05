app.controller('matchCtrl', ['$scope', '$location', 'dataFactory', function ($scope, $location, Data) {
  $scope.data = Data;
  var s = $location.path();
  var s1 = '';
  for (var i=9; i<s.length; i++) {s1 += s[i]};
  $scope.idmatch = parseInt(s1);
}]);