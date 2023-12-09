//variable/fonction permettant l'affichage des données sur le fichier html
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

//fonction permettant la récupération de la ville choisie
async function getCity(){
    try {
        //récupération du contenu du fichier config
        const response = await fetch("config.json");
        const data = await response.json();
        
        //récupération de la valeur "ville" choisie
        city = data[0]["ville"]
        console.log(city);
        return city;

      } catch (error) {
        alert("Erreur lors de la récupération du nom de la ville - error", error);
        console.error("Erreur lors de la récupération du nom de la ville - error", error);
        throw error;
      }
}

//fonction permettant de supprimer les cookies d'une page web
function deleteAllCookies() {
  //récupération des cookies
  const cookiesString = document.cookie; //format string
  const cookiesArray = cookiesString.split("; "); //// format tableau de paires nom=valeur

  //parcourt des cookies et suppression en fixant une date d'expiration passée
  cookiesArray.forEach(cookie => {
    const cookieName = cookie.split("=")[0];
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
}


//fonction permettant l'appel de l'api météo
async function callAPI() {

    deleteAllCookies(); //suppression des cookies

    var city =  await getCity(); //récupération de la ville choisie

    //paramètres de la requête
    var access_key = "cd3636c96d801f29373faa8ed40b8e96";
    var query = city;

    //url de la requête api
    var url="http://api.weatherstack.com/current?access_key="+access_key+"&query="+query; 
    console.log(url)
    
    //récupération des données de l'api
    $.get(url, success).done(function() {
        //alert( "success" );
      })
      .fail(function() {
        alert("Erreur lors de l'appel de l'API");
        console.error("Erreur lors de l'appel de l'API");
      })
      .always(function() {
        //alert( "finished" );
      });
}