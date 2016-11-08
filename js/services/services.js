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

.factory('userServiceToken', function($http) {

  var _postToken = function(parametros){
      return $http.post(SERVICE_URL+"/session",parametros);
  };

  return{
      postToken: _postToken
  }


})



.factory('userServiceLogin', function($http) {
  var _getLogin = function(token){
      return $http.get(SERVICE_URL+"/session/user?token="+token);
  };

  return{
    getLogin: _getLogin
  }
})


.factory('userServicePass', function($http) {
 return {
    putPassword: function(_id,_password){

      var parametros = {
        id:_id,
        password:_password
      };
      var _url=  SERVICE_URL+"/user";
      return $http.put(_url,parametros).then(function(response){
              console.log("executou");
            return response;
            }, function(error){
              console.log("erro!");
            });
     }
  }
})



.factory('Scopes', function ($rootScope) {
    var mem = {};

    return {
      store: function (key, value) {
        mem[key] = value;
      },
      get: function (key) {
         return mem[key];
       }
    };
})


.factory('buscarCorrida', function($http) {
 return {
    getCorridas: function(inicio, termino, idCar, idUser, flag){
      //console.log(inicio,termino,idCar);

      //http://localhost:3000/run?$gte="2016-06-21"&$lte="2016-06-22"
      if (flag==1) {             // caso flag igual a 1 filtro será feito com datas + o idCar
        var _url = RUN+'?$gte="'+inicio+'"&$lte="'+termino+'"&carro='+idCar+'&flag='+flag+'';
            //console.log(_url);
      }else if (flag==0){       // usado no apk
        var _url = RUN+'?$gte="'+inicio+'"&$lte="'+termino+'"&flag='+flag+'&usuario='+idUser+'';
            //console.log(_url);
      }else{                   // usado em outro sistema de busca, passando qualquer valor diferente de 0 e 1
        var _url = RUN+'?$gte="'+inicio+'"&$lte="'+termino+'"&flag='+flag+'';
           //console.log(_url);
      }
      //db.runs.find({'deviceStartDate':{$gte: ISODate('2016-10-08'),$lte:ISODate('2016-10-11')}}).pretty()

       return $http.get(_url).then(function(response){
          return response;
       }, function(error){
         console.log(error);
    })
  }
 }
});
