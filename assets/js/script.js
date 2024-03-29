$(document).ready(function(){

var myToken = '10232758412363095';
var apiUrl = 'https://superheroapi.com/api.php';

//3.3 Comprueba la información ingresada por el usuario al hacer click en el boton buscar 
$( "#buscarHero" ).on( "click", function() {
    var numeroHero = $("#inputnumber").val();

    if (validarInput(numeroHero) == 0) {
        createSuperHeroSection(numeroHero);
    }
})

function createSuperHeroSection(numeroHero){
    //Limpia cualquier resultado anterior - The empty() method removes all child nodes and content from the selected elements
    limpiaOutput()
    //plugin - invoca al jquery plugin getApiData el cual mediante Ajax y metodo GET obtiene la data del superhero
    $('#cardHeroInfo').getApiData({ 
        heroIdParm: numeroHero, // pasa parametro numero ingresado por usuario al plugin getApiData
        tokenParm: myToken,     // pasa parametro token al plugin getApiData
        apiUrlParm: apiUrl,     // pasa parametro url al plugin getApiData              
    });
}

function validarInput(numero) { 
    let permitido = /[0-9]/gim;

    if ( numero.match(permitido)) { 
        document.querySelector(".error").innerHTML = "";
        return 0;
    } else {
        limpiaOutput() 
        document.querySelector(".error").innerHTML = "Para poder buscar un SuperHero debes ingresar un número";
        return 1;
    }
}

function limpiaOutput() { 
    $('#cardHeroInfo').empty(); 
    $('#chartContainer').empty(); 
    $('.herofound').empty(); 
}

});
