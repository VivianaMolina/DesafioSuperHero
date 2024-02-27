jQuery.fn.heroPowerstatsPieChart = function(options) {
    var dataPoints = options.dataPointsParm;
    var heroName = options.idNameParm;
    var countPowerstats = 0;
    var NoPowerstatsInfo = ' ';
    var dps = [];

    if (validaPowerstatsData(dataPoints.intelligence) == 1) {
        dataPoints.intelligence = 0;
        countPowerstats++;
    }
    if (validaPowerstatsData(dataPoints.strength) == 1) {
        dataPoints.strength = 0;
        countPowerstats++;
    }
    if (validaPowerstatsData(dataPoints.speed) == 1) {
        dataPoints.speed = 0;
        countPowerstats++;
    }
    if (validaPowerstatsData(dataPoints.durability) == 1) {
        dataPoints.durability = 0;
        countPowerstats++;
    }
    if (validaPowerstatsData(dataPoints.power) == 1) {
        dataPoints.power = 0;
        countPowerstats++;
    }
    if (validaPowerstatsData(dataPoints.combat) == 1) {
        dataPoints.combat = 0;
        countPowerstats++;
    }
    
    if (countPowerstats === 6){
        NoPowerstatsInfo = " SIN DATOS";
    }

    dps.push({y: dataPoints.intelligence, label: "intelligence"});
    dps.push({y: dataPoints.strength, label: "strength"});
    dps.push({y: dataPoints.speed, label: "speed"});
    dps.push({y: dataPoints.durability, label: "durability"});
    dps.push({y: dataPoints.power, label: "power"});
    dps.push({y: dataPoints.combat, label: "combat"});

    var options = {
        backgroundColor: "#FFDB5C",
        title: {
             text: `Estadisticas de Poder para ${heroName}${NoPowerstatsInfo}`
        },
        data: [{
            type: "pie",
            startAngle: 40,
            toolTipContent : "<b>{label},</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabel: "{label} ({y})",
            yValueFormatString: "#,##0.#" % "",
            dataPoints: dps
        }]
    };

    $("#chartContainer").CanvasJSChart(options);

    function validaPowerstatsData(valor) { 
        if (valor === "null" ) {
            return 1;
        }
    }
}


