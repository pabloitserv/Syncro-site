angular.module('syncro')
.controller("syncroCtrl", function($scope, $http, veiculoService, buscarCorrida, $filter, $location){

  $scope.volta = function (){
    $location.path( '/menu');
  }

  veiculoService.getVeiculos().then(function( carros ){
    for (var i = 0; i < carros.data.length; i++) {
          $scope.lista = carros.data;
    }
  });


var formataData =  function(data){
  var dataFormatada ='';
  var ano = data.substring(6,10);
  var mes = data.substring(3,5);
  var dia = data.substring(0,2);

  dataFormatada = ano+"-"+mes+"-"+dia;
  return dataFormatada
};

$scope.search = function(){
 var inicio = formataData(document.getElementById('inicio').value.substring(0, 10));
 var termino = formataData(document.getElementById('termino').value.substring(0, 10));

 move();
 $scope.show = true;

 var idCar = $scope.car.IdVeiculo;

 buscarCorrida.getCorridas( inicio, termino, idCar, 0, 1).then(function(corridas){


  var cont = 0;

  $scope.dados = [];
  $scope.dadosT = [];

  for (var i = 0; i < corridas.data.length; i++) {
        $scope.dados.push({
          name:       corridas.data[i].user.name,
          car:        corridas.data[i].vehicle,
          data_atual:      corridas.data[i].deviceStartDate,
          city:       corridas.data[i].city,
          km:       corridas.data[i].mileage,
          foto:      corridas.data[i].photo,
          situation:    corridas.data[i].open,
          index: cont
        });
        cont++
  }
  $scope.coletaDados = function ( busca ){
    var comeco = busca,
        posicao = comeco.index;
       //$scope.dados[posicao],
      // $scope.dados[posicao-1];

      $scope.kmIn = $scope.dados[posicao].km;
      $scope.kmOut = $scope.dados[posicao+1].km;
      $scope.somaKm = $scope.dados[posicao+1].km - $scope.dados[posicao].km;
      $scope.somaKmExtraRota = $scope.dados[posicao+2].km - $scope.dados[posicao+1].km;
  
      $scope.foto = [{
        imagem1: $scope.dados[posicao].foto,
        imagem2: $scope.dados[posicao + 1].foto,
        km1: corridas.data[posicao].mileage,
        km2: corridas.data[posicao + 1].mileage
      }];


        return $scope.coletaDados ? true : false;
  }
  $scope.show = false;
    });
  }



});
