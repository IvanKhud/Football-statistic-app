app.controller('MatchesCtrl', function($http){
  var arr = this;
  
  $http.get("https://footballbet.com.ua/api/matches/")
  .then(function(response) {
      arr.matches = response.data.result;
      arr.totalItems = arr.matches.length;
      for (var i = 0; i < arr.matches.length; i++) {
      arr.matches[i].bothTeams = 
      arr.matches[i].firstTeam.concat(" - ", arr.matches[i].secondTeam);    
  };
  });
  
  arr.viewby = 10;
  arr.currentPage = 4;
  arr.itemsPerPage = arr.viewby;
  arr.maxSize = 5;

});