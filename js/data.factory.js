app.factory('dataFactory', ['$http', function($http) {

    var Data = {};
    Data.loading = true;

    Data.getChampionships = function () {
      Data.loading = true;
      if (Data.championships === undefined){
        $http.get("https://footballbet.com.ua/api/championships/")
        .then(function(response) {
          Data.championships = response.data.result;
          Data.loading = false;
        });
      }
      
    };
    
    Data.getTeams = function () {
      Data.loading = true;
      if (Data.teams === undefined) {
        $http.get("https://footballbet.com.ua/api/teams/")
        .then(function(response) {
          Data.teams = response.data.result;
          Data.loading = false;
        });
      };
    };
    
    Data.getMatches = function () {
      Data.loading = true;
      if (Data.matches === undefined) {
        $http.get("https://footballbet.com.ua/api/matches/")
        .then(function(response) {
          Data.matches = response.data.result;
          for (var i = 0; i < Data.matches.length; i++) {
          Data.matches[i].bothTeams = 
          Data.matches[i].firstTeam.concat(" - ", Data.matches[i].secondTeam);    
          }
          Data.loading = false;
        });
      };
    };

    return Data;

}]);