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
    getCorridas: function(inicio, termino, idCar){
      console.log(inicio,termino,idCar);
      //http://localhost:3000/run?$gte="2016-06-21"&$lte="2016-06-22"
      var _url= 'http://104.236.110.237:3000/run?$gte="'+inicio+'"&$lte="'+termino+'"&carro='+idCar+'';
      console.log(_url);

       return $http.get(_url).then(function(response){
          return response;
       }, function(error){

    });
  }
 }
});
