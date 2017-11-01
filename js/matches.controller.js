app.controller('MatchesCtrl', function($http){
    var arr = this;
      $http.get("https://footballbet.com.ua/api/matches/")
  .then(function(response) {
       arr.matches = response.data.result;
   });
});