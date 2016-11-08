angular.module( 'syncro' )
.controller( 'menuCtrl', function ( $scope, $location ){

  $scope.pesquisaByVehicle = function (){
    $location.path( '/busca' );
  }
  $scope.pesquisaGeral =  function (){
    $location.path( '/relatorio');
  }

});
