app.factory('dataFactory', ['$http', function($http) {

    var Data = {
      championships: [],
      teams: [],
      matches: []  
    };

    Data.getChampionships = function () {
      $http.get("https://footballbet.com.ua/api/championships/")
      .then(function(response) {
        Data.championships = response.data.result;
      });
    };
    
    Data.getTeams = function () {
      $http.get("https://footballbet.com.ua/api/teams/")
      .then(function(response) {
        Data.teams = response.data.result;
      });
    };
    
    Data.getMatches = function () {
      $http.get("https://footballbet.com.ua/api/matches/")
      .then(function(response) {
        Data.matches = response.data.result;
        for (var i = 0; i < Data.matches.length; i++) {
        Data.matches[i].bothTeams = 
        Data.matches[i].firstTeam.concat(" - ", Data.matches[i].secondTeam);    
        }
      });
    };

    return Data;

}]);