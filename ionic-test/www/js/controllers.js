angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope, $http) {
    $scope.fantasma = [
        {"nome":"Gengar", "tipo":"Assustador", "podeservisto": true},
        {"nome": "Gasparzinho", "tipo":"Camarada", "podeservisto": true},
        {"nome": "Poltergeist", "tipo":"Fenomeno", "podeservisto": false},
        {"nome": "Homem de Marshmallow", "tipo":"Gigante", "podeservisto":true}
        ];
        
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
    
    $scope.alert = function(){
        alert("Oi");
    }
    
    $scope.sometext = function(){
        $scope.escrito = true;
    }
})
   
.controller('cameraTabDefaultPageCtrl', function($scope) {
   // $scope.bleh = "bleeeeeeeeeeeeh";
    $scope.bleh = {"blih": "blaaaaaaaah"};
    $scope.animaisMarinhos = ["Baleia", "Golfinho", "Tubarão"];
    $scope.alertbleh = function(){
        alert("bleeeeeeh");
    }
})
   
.controller('cartTabDefaultPageCtrl', function($scope) {

})
   
.controller('cloudTabDefaultPageCtrl', function($scope) {

})
    