app.controller('ChampionshipsCtrl', function($http){
    var arr = this;
      $http.get("https://footballbet.com.ua/api/championships/")
  .then(function(response) {
       arr.championships = response.data.result;
   });
});
