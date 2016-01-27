angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope, $http) {
        
    $scope.buscaAPI = function(busca2){
        // Simple GET request example:
        var url = "https://restcountries.eu/rest/v1/name/"
        var nome = busca2;
        var url_get = url + nome;
        $http.get(url_get).then(function successCallback(response) {
            console.log(response.data);
            $scope.data = response.data;
          }, function errorCallback(response) {
            alert(JSON.stringify(response));
          });
    };
})
   
.controller('homeCtrl', function($scope) {
   // $scope.bleh = "bleeeeeeeeeeeeh";
    $scope.bleh = {"blih": "blaaaaaaaah"};
    $scope.animaisMarinhos = ["Baleia", "Golfinho", "Tubarão"];
    $scope.alertbleh = function(){
        alert("bleeeeeeh");
    }
})
    