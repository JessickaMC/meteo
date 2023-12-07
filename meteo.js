var success = function(data) {
    console.log("donnees api", data)
    //alert("Meteo temp  : "  + data.main.temp);
    //var element = document.getElementById("zone_meteo");
    //element.innerHTML = "La temperature est de " + data.main.temp;
}


function callAPI() {
    var api = "http://api.weatherstack.com/current";
    var access_key = 'cc0ec2c6072259e9e860d22017ba42c9';
    var query = 'Niort';

    var url  = api + "?access_key=" + access_key + "&query=" + query


    $.get(url, success).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "L'appel de l'API n'a pas fonctionné." );
      })
      .always(function() {
        //alert( "finished" );
      });
}