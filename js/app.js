angular.module("syncro", [ "ngRoute" ])
.config( function ( $routeProvider ) {

  $routeProvider.when( '/login', {
    templateUrl: './view/login.html',
    controller:  'loginCtrl'
  } );
  $routeProvider.when( '/menu', {
    templateUrl: './view/menu.html',
    controller:  'menuCtrl'
  });
  $routeProvider.when( '/busca', {
    templateUrl: './view/busca.html',
    controller:  'syncroCtrl'
  });
  $routeProvider.when( '/relatorio', {
    templateUrl: './view/relatorio.html',
    controller:  'relatorioCtrl'
  });
  $routeProvider.when( '/telaImpressao', {
    templateUrl: './view/telaImpressao.html',
    controller:  'telaImpressaoCtrl'
  });

  $routeProvider.otherwise({ redirectTo: '/login' });
});
