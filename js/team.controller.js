app.controller('teamCtrl', ['$scope', '$location', 'dataFactory', function ($scope, $location, Data) {
  $scope.data = Data;
  var s = $location.path();
  var s1 = '';
  for (var i=7; i<s.length; i++) {s1 += s[i]};
  $scope.idteam = parseInt(s1);
  for (i in $scope.data.teams) {
  	if ($scope.data.teams[i].id_teams == s1) {
      $scope.tId = i;
  	}
  }
  
}]);