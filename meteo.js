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

async function getCity(){
    //truc
    //const config = require('./config.json');
    /*fetch("config.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let city = data[0]["ville"];
      console.log(city)
    })
    return city*/

    try {
        const response = await fetch("config.json");
        const data = await response.json();
        
        // Faites quelque chose avec les données
        city = data[0]["ville"]
        console.log(city);
    
        // Retournez les données si nécessaire
        return city;
      } catch (error) {
        console.error('Une erreur est survenue lors de la récupération des données :', error);
        // Propagez l'erreur pour qu'elle puisse être traitée par le code appelant
        throw error;
      }
    /*const reponse = await fetch("config.json");
    const data = await reponse.json();
    const city = data;
    //console.log(city);*/

    /*$.ajax({
        url: 'config.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
        },
        error: function(xhr, status, error) {
            console.error('Échec du chargement du JSON. Statut :', status, 'Erreur :', error);
        }
        });*/
        /*fetch("config.json")
        .then(response => {
            console.log("Response object:", response);
            return response.json();
        })
        .then(data => {
            console.log("JSON data:", data);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération du fichier JSON :', error);
        });*/
}



async function callAPI() {

    //const result = await getCity();
    var city =  await getCity();
    //console.log("city:",city);
    //var api = "http://api.weatherstack.com/current";

    // Paramètres de la requête
    //key1 = cd3636c96d801f29373faa8ed40b8e96
    //key2 = 89d22bf67acfdd8cdcdd89b81d952385
    var access_key = "cd3636c96d801f29373faa8ed40b8e96";
    var query = city;

    //var url="https://api.openweathermap.org/data/2.5/weather?q=Niort&appid=3b062c74131c1bd300be8490bd7f83c8&units=metric"
    var url="http://api.weatherstack.com/current?access_key="+access_key+"&query="+query;
    console.log(url)
    /*const response = await fetch(url);
    const myJson = await response.json();
    console.log(myJson);*/
    /*params = {
      "access_key": "cd3636c96d801f29373faa8ed40b8e96",
      "query": "Niort"
  }

    axios.get('https://api.weatherstack.com/current', {params})
    .then(response => {
        if (!response.data.error) {
            const apiResponse = response.data;
            console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
        } else {
            console.log(`Response error: code: ${response.data.error.code}, info: ${response.data.error.info}`)
        }
    }).catch(error => {
        console.error("An error occurred: ", error);
    }
);*/
    
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