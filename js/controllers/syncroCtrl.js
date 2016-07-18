angular.module('syncro')
.controller("syncroCtrl", function($scope, $http, veiculoService, buscarCorrida, $filter){

  veiculoService.getVeiculos().then(function(carros){
      if (carros.data != null) {
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
 var idCar = $scope.car.IdVeiculo;

 buscarCorrida.getCorridas(inicio,termino,idCar,0,1).then(function(corridas){

  var cont = 0;

  $scope.dados = [];
  $scope.dadosT = [];


  for (var i = 0; i < corridas.data.length; i++) {

    if(corridas.data[i].open == true){
      $scope.dados.push ({
        dataIn: corridas.data[i].deviceStartDate,
        veiculoIn: $scope.car.Placa+" - "+$scope.car.Modelo,
        instalador: corridas.data[i].user.name,
        kmIn: corridas.data[i].mileage,
        fotoIn: corridas.data[i].photo,
        index: cont

      });

    }
    if(corridas.data[i].open == false){
      $scope.dadosT.push ({
      dataOut: corridas.data[i].deviceStartDate,
      veiculoOut: $scope.car.Placa+" - "+$scope.car.Modelo,
      kmOut: corridas.data[i].mileage,
      index: cont,
      fotoOut: corridas.data[i].photo
    });
    cont++;
    }
  };
  console.log(corridas);
 });

};
$scope.coletaDados = function(busca){
  var comeco = busca;
  var posicao = comeco.index;
  var final = $scope.dadosT[posicao];
  var teste = $scope.dadosT[posicao-1];

  $scope.somaKm = final.kmOut - comeco.kmIn;

  if(posicao>0){
    $scope.kmExtra =comeco.kmIn - teste.kmOut;
  }else{
    $scope.kmExtra =0;
  }

  $scope.foto = [{
    imagen1: comeco.fotoIn,
    imagen2: final.fotoOut,
    km1: comeco.kmIn,
    km2: final.kmOut
  }];

  return $scope.coletaDados ? true : false;
};

});
