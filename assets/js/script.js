$(document).ready(function(){

var myToken = '10232758412363095';
var apiUrl = 'https://superheroapi.com/api.php';
var dataPoints = [];

//3.3 Comprueba la información ingresada por el usuario al hacer click en el boton buscar 
$( "#buscarHero" ).on( "click", function() {
    var numeroHero = $("#inputnumber").val();

    if (validarInput(numeroHero) == 0) {
        createSuperHeroSection(numeroHero);
    }
})

function createSuperHeroSection(numeroHero){
    //Limpia cualquier resultado anterior - The empty() method removes all child nodes and content from the selected elements
    $('#CardHeroInfo').empty(); 
    $('#chartContainer').empty(); 
    //plugin - invoca al jquery plugin getApiData el cual mediante Ajax y metodo GET obtiene la data del superhero
    $('#CardHeroInfo').getApiData({ 
        HeroIdParm: numeroHero, // pasa parametro numero ingresado por usuario al plugin getApiData
        tokenParm: myToken,     // pasa parametro token al plugin getApiData
        apiUrlParm: apiUrl,     // pasa parametro url al plugin getApiData   
        dataPointsParm: dataPoints,             
    });
}

function validarInput(numero) { 

    let permitido = /[0-9]/gim;

    if ( numero.match(permitido)) { 
        document.querySelector(".error").innerHTML = "";
        return 0;
    } else {
       $('#CardHeroInfo').empty(); 
       $('#chartContainer').empty(); 
       document.querySelector(".error").innerHTML = "Para poder buscar un SuperHero debes ingresar un número";
       return 1;
    }
}

});
