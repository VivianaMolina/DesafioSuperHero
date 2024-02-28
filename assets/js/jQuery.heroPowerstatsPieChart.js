jQuery.fn.heroPowerstatsPieChart = function (options) {
    var dataPoints = options.dataPointsParm;
    var heroName = options.heroNameParm;
    var countPowerstats = 0;
    var NoPowerstatsInfo = ' ';
    var dps = [];

    //Valida si el dato del PowerstatsData contiene el valor null y lo actualiza a cero para que se represente en el chart
    findNullsPowerstatsData();

    //Genera un arreglo con el formato de datapoint
    dps.push(
        { y: dataPoints.intelligence, label: "intelligence" },
        { y: dataPoints.strength, label: "strength" },
        { y: dataPoints.speed, label: "speed" },
        { y: dataPoints.durability, label: "durability" },
        { y: dataPoints.power, label: "power" },
        { y: dataPoints.combat, label: "combat" }
    );

    var options = {
        backgroundColor: "#FFDB5C",
        title: {
            text: `Estadisticas de Poder para ${heroName}${NoPowerstatsInfo}`
        },
        data: [{
            type: "pie",
            startAngle: 40,
            toolTipContent: "<b>{label},</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabel: "{label} ({y})",
            yValueFormatString: "#,##0.#" % "",
            dataPoints: dps
        }]
    };

    $("#chartContainer").CanvasJSChart(options);

    function findNullsPowerstatsData(){

        if (validaPowerstatsData(dataPoints.intelligence) == 1) {
            dataPoints.intelligence = 0;
        }
        if (validaPowerstatsData(dataPoints.strength) == 1) {
            dataPoints.strength = 0;
        }
        if (validaPowerstatsData(dataPoints.speed) == 1) {
            dataPoints.speed = 0;
        }
        if (validaPowerstatsData(dataPoints.durability) == 1) {
            dataPoints.durability = 0;
        }
        if (validaPowerstatsData(dataPoints.power) == 1) {
            dataPoints.power = 0;
        }
        if (validaPowerstatsData(dataPoints.combat) == 1) {
            dataPoints.combat = 0;
        }
    
        if (countPowerstats == 6) {
            NoPowerstatsInfo = " SIN DATOS";
        }
    }
    
    function validaPowerstatsData(valor) {
        if (valor === "null") {
            countPowerstats++;
            return 1;
        }
    }
}


