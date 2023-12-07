var success = function(data) {
    console.log("donnees api", data)
    //alert("Meteo temp  : "  + data.main.temp);
    //var element = document.getElementById("zone_meteo");
    //element.innerHTML = "La temperature est de " + data.main.temp;
}

function handler(event)  {
    var response  = event.response;
    var headers  = response.headers;

    // If Access-Control-Allow-Origin CORS header is missing, add it.
    // Since JavaScript doesn't allow for hyphens in variable names, we use the dict["key"] notation.
    if (!headers['access-control-allow-origin']) {
        headers['access-control-allow-origin'] = {value: "*"};
        console.log("Access-Control-Allow-Origin was missing, adding it now.");
    }

    return response;
}

function callAPI() {

   
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://forecast9.p.rapidapi.com/',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c2fdb57519mshcec056a2d3b9592p10e9bfjsnfb6230b5d39d',
            'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });


   /* var url = "https://example.com/api/current";

    // Paramètres de la requête
    var params = {
        access_key: "cc0ec2c6072259e9e860d22017ba42c9",
        query: "Niort"
    };

    //var url="https://api.openweathermap.org/data/2.5/weather?q=Niort&appid=3b062c74131c1bd300be8490bd7f83c8&units=metric"
    var url="origin:https://example.com/api/current?access_key=cc0ec2c6072259e9e860d22017ba42c9&query=Niort"

    $.get(url, success).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "L'appel de l'API n'a pas fonctionné." );
      })
      .always(function() {
        //alert( "finished" );
      });*/
}