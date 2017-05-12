var app = angular.module('grafico', ['nvd3']);

/*jslint nomen: true*/
/*global app*/

(function (app, _) {
    'use strict';
    console.log(app)
    app.controller('MainCtrl', ['$scope', 'GraficasSrv', 
        function ($scope, GraficasSrv) {
            $scope.optionsGraficaVertical = GraficasSrv.graficaVertical;
            $scope.optionsGraficaDiscos = GraficasSrv.graficaDisco;
            $scope.optionsGraficaDiscreta = GraficasSrv.graficaDiscreta;

            $scope.config = {
                visible: true, // default: true
                extended: false, // default: false
                disabled: false, // default: false
                refreshDataOnly: true, // default: true
                deepWatchOptions: true, // default: true
                deepWatchData: true, // default: true
                deepWatchDataDepth: 2, // default: 2
                debounce: 10 // default: 10
            };

            var datosRecibidos = {
                "datosTotal" : [
                    {
                        "datos": {
                        "key": "Series1",
                        "color":"#d62728",
                        "values":[
                            {"label":"Group A","value":2.1111111111111},
                            {"label":"Group B","value":-64.1111111111111},
                            {"label":"Group C","value":8.1111111111111}
                            
                        ]}
                    },
                    {
                        "datos": {
                        "key": "Series2",
                        "color":"#000",
                        "values":[
                            {"label":"Group A","value":3.1111111111111},
                            {"label":"Group B","value":-7.1111111111111},
                            {"label":"Group C","value":9.1111111111111}
                            
                        ]}
                    }

                ]
            }

            var datosRecibidos2 = [
               {
                    "label": "Group A",
                    "value": 3.4543413
                }, 
                {
                    "label": "Group B",
                    "value": 7.1564646
                }, 
                {
                    "label": "Group C",
                    "value": 9.8744646
                },
                {
                    "label": "Group D",
                    "value": 7.1564646
                }, 
                {
                    "label": "Group E",
                    "value": 7.1564646
                },
                {
                    "label": "Group F",
                    "value": -7.1564646
                }
            ];

            var datosRecibidos3 = [
                {
                    key: "Cumulative Return",
                    values: [
                        {
                            "label" : "Marzo" ,
                            "value" : 29.765957771107,
                            "color" : "#000"
                        } ,
                        {
                            "label" : "Abril" ,
                            "value" : 10,
                            "color" : "red"
                        }
                    ]
                }
            ]

            $scope.grafica1 = []; 
            for(var i = 0; i<datosRecibidos.datosTotal.length ; i++){
                var datosTotal = {"key":"", "color":"", "values":[]};
                $scope.grafica1[i] = datosTotal;
                $scope.grafica1[i].key = datosRecibidos.datosTotal[i].datos.key;
                $scope.grafica1[i].color = datosRecibidos.datosTotal[i].datos.color;
                for(var j = 0; j<datosRecibidos.datosTotal[i].datos.values.length ; j++){
                    var datosValue = {"label":"", "value":0}
                    $scope.grafica1[i].values[j] = datosValue;
                    $scope.grafica1[i].values[j].label = datosRecibidos.datosTotal[i].datos.values[j].label;
                    $scope.grafica1[i].values[j].value = datosRecibidos.datosTotal[i].datos.values[j].value;
                }
            }

            $scope.grafica2 = []; 
            for(var i = 0; i<datosRecibidos2.length ; i++){
                var datosTotal2 = {"key":"", "y":0};
                $scope.grafica2[i] = datosTotal2;
                $scope.grafica2[i].label = datosRecibidos2[i].label;
                $scope.grafica2[i].value = datosRecibidos2[i].value;
            }

            $scope.grafica3 = []; 
            for(var i = 0; i<datosRecibidos3.length ; i++){
                var datosTotal3 = {"key":"", "values":[]};
                $scope.grafica3[i] = datosTotal3;
                $scope.grafica3[i].label = datosRecibidos3[i].label;
                $scope.grafica3[i].value = datosRecibidos3[i].value;
                for(var j = 0; j<datosRecibidos3[i].values.length ; j++){
                    var datosValue = {"label":"", "value":0, "color":""}
                    $scope.grafica3[i].values[j] = datosValue;
                    $scope.grafica3[i].values[j].label = datosRecibidos3[i].values[j].label;
                    $scope.grafica3[i].values[j].value = datosRecibidos3[i].values[j].value;
                    $scope.grafica3[i].values[j].color = datosRecibidos3[i].values[j].color;
                }
            }

        }]);

}(this.app, this._));