//Global app. _
(function () {
    'use strict';
    console.log(app)
    app.factory('GraficasSrv', [
        function(){
            function graficaVertical(){
                var graficaVertical = {
                    chart: {
                        type: 'multiBarHorizontalChart',
                        height: 400,
                        width:640,
                        x: function(d){return d.label;},
                        y: function(d){return d.value;},
                        showControls: true,
                        showValues: true,
                        duration: 500,
                        xAxis: {
                            showMaxMin: false
                        },
                        yAxis: {
                            axisLabel: 'Values',
                            tickFormat: function(d){
                                return d3.format(',.2f')(d);
                            }
                        },
                        zoom: {
                            enabled: true,
                            scaleExtent: [1, 10],
                            useFixedDomain: false,
                            useNiceScale: true,
                            horizontalOff: false,
                            verticalOff: true,
                            unzoomEventType: 'dblclick.zoom'
                        }
                    }
                };
                return graficaVertical;
            }
            

            function graficaDisco(){
                var graficaDisco = {
                    chart: {
                        type: 'pieChart',
                        height: 400,
                        width:640,
                        donut: true,
                        x: function(d){return d.label;},
                        y: function(d){return d.value;},
                        showLabels: true,

                        pie: {
                            startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
                            endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
                        },
                        duration: 500,
                        legend: {
                            margin: {
                                top: 5,
                                right: 5,
                                bottom: 5,
                                left: 0
                            }
                        }
                    }
                };
                return graficaDisco;
            }

            function graficaDiscreta(){
                var graficaDiscreta = {
                    chart: {
                        type: 'discreteBarChart',
                        height: 400,
                        width:640,
                        margin : {
                            top: 5,
                            right: 5,
                            bottom: 5,
                            left: 5
                        },
                        x: function(d){return d.label;},
                        y: function(d){return d.value + (1e-10);},
                        showValues: true,
                        valueFormat: function(d){
                            return d3.format(',.0f')(d);
                        },
                        duration: 500,
                        xAxis: {
                            axisLabel: ''
                        },
                        yAxis: {
                            axisLabel: '',
                            axisLabelDistance: -10
                        }
                    }
                };
                return graficaDiscreta;
            }

            var vuelta = {
                "graficaVertical" : graficaVertical(),
                "graficaDisco" : graficaDisco(),
                "graficaDiscreta" : graficaDiscreta()
            }

            return vuelta;

            
    }]);
}());