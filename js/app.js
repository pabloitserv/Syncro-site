angular.module("syncro", []);
angular.module("syncro").controller("syncroCtrl", function($scope){
  $scope.infos = [
    {date_i: "20/06/2016", data_f: "20/06/2016", placa: "PLO-1234 Uno",     kmi: "1000", kmf: "1100", instalador: "Pablo"},
    {date_i: "01/04/2016", data_f: "01/04/2016", placa: "GBG-4321 Palio",   kmi: "6100", kmf: "7200", instalador: "Daniel"},
    {date_i: "20/06/2016", data_f: "20/06/2016", placa: "AFS-8888 Corsa",   kmi: "10500", kmf: "11000",  instalador: "Lidiane"},
    {date_i: "20/06/2016", data_f: "20/06/2016", placa: "FIR-1521 Fiorino", kmi: "10", kmf: "30",  instalador: "Fernanda"},
    {date_i: "20/06/2016", data_f: "20/06/2016", placa: "KOF-6060 Uno",     kmi: "95625", kmf: "96150",  instalador: "Livia"},
    {date_i: "20/06/2016", data_f: "20/06/2016", placa: "DNA-6789 K",       kmi: "50225", kmf: "52369",  instalador: "Viviane"}
  ];
});
