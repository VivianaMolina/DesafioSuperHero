jQuery.fn.getApiData = function (options) {
    var heroId = options.HeroIdParm; //parametro que contiene el numero del heroe ingresado por usuario
    var token = options.tokenParm; //parametro que contiene el token
    var apiUrl = options.apiUrlParm; //parametro que contiene la url de la API
    
    var dataPoints = [];
    var idName = options.idNameParm;
    var element = this;

    $.ajax({   //3.4 Consulta la API mediante AJAX con la sintaxis de jQuery
        type: "GET",
        url: `${apiUrl}/${token}/${heroId}`,
        dataType: "json",
        success: function (data) {
            
            if (data.response === "success"){
                dataPoints = data.powerstats
                idName = data.name;
                //Genera el Pie Chart de CanvasJs
                window.onload = $('#chartContainer').heroPowerstatsPieChart({
                dataPointsParm: dataPoints,    // pasa parametro dataPoints  
                idNameParm: idName  // pasa parametro nombre
                });           
                document.querySelector(".Herofound").innerHTML = "SuperHero Encontrado",
                element.append( // 3.5 Renderiza la información recibida por la API dinámicamente utilizando tarjetas (card) de Bootstrap
                `<div class="col-md-4">
                        <img src="${data.image.url}" class="img-fluid style-img" alt="...">
                    </div>`,
                `<div  class="col-md-8 mt-2">
                        <div class="card-body">
                            <p class="fs-4">Nombre: ${data.name} </p>
                            <p class="conexiones-text">Conexiones: ${data.connections["group-affiliation"]}</p>
                            <p class="fst-italic">Publicado por: ${data.biography.publisher}</p><hr>              
                            <p class="fst-italic">Ocupación: ${data.work.occupation}</p><hr>
                            <p class="fst-italic">Primera Aparición: ${data.biography["first-appearance"]}</p><hr>
                            <p class="fst-italic">Altura: ${data.appearance["height"].join(" - ")}</p><hr>
                            <p class="fst-italic">Peso: ${data.appearance["weight"].join(" - ")}</p><hr>
                            <p class="fst-italic">Alianzas: ${data.biography["aliases"]}</p> 
                        </div> 
                    </div>`,
            )
                
            }
            else{
                document.querySelector(".error").innerHTML = "SuperHero no encontrado, pruebe con un número mayor a 0 y menor a 733";
            }          
        },
        error: function (jqxhr, textStatus, errorThrown) {
            // Code to execute when the request FAILS
            console.error("Error fetching token:", errorThrown);
            console.log("error")
        }
    });
    return this;
};