app.controller('ChampionshipsCtrl', function($http){
  var arr = this;
      $http.get("https://footballbet.com.ua/api/championships/")
  .then(function(response) {
       arr.championships = response.data.result;
       arr.totalItems = arr.championships.length;
   });

  arr.viewby = 10;
  arr.currentPage = 4;
  arr.itemsPerPage = arr.viewby;
  arr.maxSize = 5;

});
