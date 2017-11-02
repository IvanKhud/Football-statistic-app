app.controller('MatchesCtrl', function($http){
  var arr = this;
  
  $http.get("https://footballbet.com.ua/api/matches/")
  .then(function(response) {
       arr.matches = response.data.result;
       arr.totalItems = arr.matches.length;
  });

  arr.viewby = 10;
  arr.currentPage = 4;
  arr.itemsPerPage = arr.viewby;
  arr.maxSize = 5;

});