var success = function(data) {
    console.log(data)

    document.getElementById("icon").src = data.current.weather_icons;

    var place = document.getElementById("place");
    place.innerHTML =  data.location.name;

    var desc = document.getElementById("desc");
    desc.innerHTML =  data.current.weather_descriptions;

    var temp = document.getElementById("temp");
    temp.innerHTML =  data.current.temperature + "°C";

    var temp_feels = document.getElementById("temp_feels");
    temp_feels.innerHTML =  data.current.feelslike + "°C Feels like";

    var humidity = document.getElementById("humidity");
    humidity.innerHTML =  data.current.humidity + "% Humidity";

}

function getCity(){

    path = "/config.json";
    $.getJSON(path, function (dat) {
        return dat;
      })

}

function callAPI() {

    var city = getCity();

    //var api = "http://api.weatherstack.com/current";

    // Paramètres de la requête
    var access_key = "cd3636c96d801f29373faa8ed40b8e96";
    var query = "Niort";

    //var url="https://api.openweathermap.org/data/2.5/weather?q=Niort&appid=3b062c74131c1bd300be8490bd7f83c8&units=metric"
    var url="http://api.weatherstack.com/current?access_key="+access_key+"&query="+query

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