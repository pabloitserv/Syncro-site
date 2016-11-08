angular.module( 'syncro' )
.controller( 'relatorioCtrl', function ( $scope, buscarCorrida, $location, veiculoService ){

    $scope.volta = function (){
      $location.path( '/menu');
    }
    $scope.printScreen = function (){
      $location.path( '/telaImpressao');
    }

    var formataData =  function(data){
      var dataFormatada ='';
      var ano = data.substring(6,10);
      var mes = data.substring(3,5);
      var dia = data.substring(0,2);

      dataFormatada = ano+"-"+mes+"-"+dia;
      return dataFormatada
    };

    $scope.cidade = [
      "ARARAQUARA",
      "BOTUCATU",
      "JAÚ",
      "SÃO CARLOS"
    ];

    $scope.search = function(){
      $scope.dadosGerais = [];
      $scope.dadosGeraisFim = [];

      var inicio = formataData(document.getElementById('inicio').value.substring(0, 10));
      var termino = formataData(document.getElementById('termino').value.substring(0, 10));
      move();
      $scope.show = true;

      var city = $scope.town;

      buscarCorrida.getCorridas( inicio, termino, 0, 0, 2 ).then( function ( corridas ){

        $scope.place = city;

        for (var i = 0; i < corridas.data.length; i++) {
          if ( corridas.data[i].city === city && corridas.data[i].open === true ) {

                $scope.dadosGerais.push({
                  name:       corridas.data[i].user.name,
                  car:       corridas.data[i].vehicle,
                  data_atual: corridas.data[i].deviceStartDate,
                  city: corridas.data[i].city,
                  situation:    corridas.data[i].open
                });
            }
          if ( corridas.data[i].city === city && corridas.data[i].open === false ) {

                $scope.dadosGeraisFim.push({
                  name:       corridas.data[i].user.name,
                  car:       corridas.data[i].vehicle,
                  data_atual: corridas.data[i].deviceStartDate,
                  city: corridas.data[i].city,
                  situation:    corridas.data[i].open
                });
            }
          }
        $scope.show = false;

      });

  }
});
