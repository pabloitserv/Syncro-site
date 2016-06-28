angular.module('syncro')

.factory('veiculoService', function($http) {
 return {
    getVeiculos: function(){
        var _url="http://www.itserv.com.br/ITServ/api/Veiculo";
        return $http.get(_url).then(function(response){
            return response;
        }, function(error){

            });
        }
      }
})

.factory('buscarCorrida', function($http) {
 return {
    getCorridas: function(_parametros){
      var _url=  'http://localhost:3000/run?car='+_parametros;
      console.log(_url);

       return $http.get(_url).then(function(response){
          return response;
       }, function(error){

    });
  }
 }
});
