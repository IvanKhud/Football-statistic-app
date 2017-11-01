app.controller('TeamsCtrl', function($http){
    var arr = this;
      $http.get("https://footballbet.com.ua/api/teams/")
  .then(function(response) {
       arr.teams = response.data.result;
   });
});