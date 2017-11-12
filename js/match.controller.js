app.controller('matchCtrl', [
  '$scope', '$routeParams', 'dataFactory', function ($scope, $routeParams, Data) {
  $scope.data = Data;
  $scope.idmatch = $routeParams.idmatch;
  $scope.data.getApi("championships", function() {
    $scope.data.getApi("matches", function() {
      $scope.data.getApi("teams", function() {
        
        for (var i = 0; i < Data.matches.length; i++) {  
          for (var j = 0; j < Data.championships.length; j++) {
            if (Data.matches[i].title.indexOf(Data.championships[j].name) >= 0) {
              Data.matches[i].id_championship = Data.championships[j].id_championship;
            }          
          }
        };
        $scope.data.loading = false;
      })
    })
  })
  }
]);