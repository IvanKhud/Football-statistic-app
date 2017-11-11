app.factory('dataFactory', [
  '$http', function($http) {

  var Data = {
    indexArr: []
  };

  Data.getChampionships = function () {
    if (Data.championships === undefined){
      Data.loading = true;
      $http.get("https://footballbet.com.ua/api/championships/")
      .then(function(response) {
        Data.championships = response.data.result;
        Data.loading = false;
      });
    }
  };
    
  Data.getTeams = function () {
    if (Data.teams === undefined) {
      Data.loading = true;
      $http.get("https://footballbet.com.ua/api/teams/")
      .then(function(response) {
        Data.teams = response.data.result;

        for (var i =0; i < Data.teams.length; i++) {
          Data.indexArr[Data.teams[i].id_teams] = i;
        }
        Data.loading = false;
      });
    }
  };
    
  Data.getMatches = function () {
    if (Data.matches === undefined) {
      Data.loading = true;
      $http.get("https://footballbet.com.ua/api/matches/")
      .then(function(response) {
        Data.matches = response.data.result;

        for (var i = 0; i < Data.matches.length; i++) {
          Data.matches[i].bothTeams = Data.matches[i].firstTeam.concat(" - ", Data.matches[i].secondTeam);    
          
          for (var j = 0; j < Data.championships.length; j++) {
            if (Data.matches[i].title.indexOf(Data.championships[j].name) >= 0) {
              Data.matches[i].id_championship = Data.championships[j].id_championship;
            }          
          }
        }
        Data.loading = false;
      });
    }
  };

  return Data;

  }
]);