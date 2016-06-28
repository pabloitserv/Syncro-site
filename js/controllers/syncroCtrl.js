angular.module('syncro')


.controller("syncroCtrl", function($scope, $http, veiculoService, buscarCorrida, $filter){

  veiculoService.getVeiculos().then(function(carros){
    if (carros.data != null) {
      $scope.lista = carros.data;
    }
});




$scope.search = function(){

 var inicio = document.getElementById('inicio').value.substring(0, 10);
 var termino = document.getElementById('termino').value.substring(0, 10);
 var id =$scope.car;


     buscarCorrida.getCorridas(id).then(function(corridas){
       var registros = [];
       if (corridas != null) {
         var cont = 0;
         for (var i = 0; i < corridas.length; i++) {
          if( corridas.data[i].open === true){
              registros[cont]=corridas[i];
              cont++;
          }
         }

       }
       console.log(id);
       console.log(inicio);
       console.log(corridas.data[i].serverStartDate);
       console.log($scope.car);

         if (inicio === corridas.data[i].serverStartDate.substring(0,10)) {
           alert("entrou");
           $scope.dados = [{
             data: corridas.data[i].serverStartDate.substring(0, 10),
             veiculo: $scope.car.placa+" - "+$scope.car.Modelo,
             instalador: "",
             km: corridas.data[i].mileage
           }];
           alert("saiu");
         }


    });
  };
});
