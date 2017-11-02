app.controller('TeamsCtrl', function($http){
  var arr = this;
  $http.get("https://footballbet.com.ua/api/teams/")
  .then(function(response) {
       arr.teams = response.data.result;
       arr.totalItems = arr.teams.length;
  });

  arr.viewby = 10;
  arr.currentPage = 4;
  arr.itemsPerPage = arr.viewby;
  arr.maxSize = 5;

});