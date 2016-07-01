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

 buscarCorrida.getCorridas(inicio,termino,idCar).then(function(corridas){
  //console.log(corridas);

  //  if (corridas != null)
  var cont = 0;

  $scope.dados = [];
  $scope.dadosT = [];
  for (var i = 0; i < corridas.data.length; i++) {
  //  var deviceDate =corridas.data[i].deviceStartDate.substring(0,10);
  //alert(deviceDate);
  //if( (deviceDate >= inicio && deviceDate <= termino) && corridas.data[i].open == true)
    if(corridas.data[i].open == true){
      $scope.dados.push ({
        dataIn: corridas.data[i].deviceStartDate,
        veiculoIn: $scope.car.Placa+" - "+$scope.car.Modelo,
        instalador: corridas.data[i].user.name,
        kmIn: corridas.data[i].mileage,
        fotoIn: corridas.data[i].photo,
        index: cont
        //corridas.data[i].deviceStartDate.substring(0, 10)+" - "+corridas.data[i].deviceStartDate.substring(11, 16)
      });
    //cont++;
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



    });
  };

$scope.coletaDados = function(busca){
  var comeco = busca;
  var posicao = comeco.index;
  var final = $scope.dadosT[posicao];

  $scope.somaKm = final.kmOut - comeco.kmIn;
  $scope.extra = comeco.kmIn - final.kmOut;


  $scope.foto = [{
    imagen1: comeco.fotoIn,
    imagen2: final.fotoOut,
    km1: comeco.kmIn,
    km2: final.kmOut
  }];

};


});
