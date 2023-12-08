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
}

//fonction permettant de supprimer les cookies d'une page web
function deleteAllCookies() {
  // Récupérer la chaîne de cookies
  const cookiesString = document.cookie;

  // Séparer les cookies en un tableau de paires nom=valeur
  const cookiesArray = cookiesString.split('; ');

  // Parcourir les cookies et les supprimer en fixant une date d'expiration passée
  cookiesArray.forEach(cookie => {
    const cookieName = cookie.split('=')[0];
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
}

function clearNavigationHistory() {
  // Remplace l'entrée actuelle dans l'historique par une nouvelle page
  window.location.replace('index.html');
}


//fonction permettant le rechargement de la page
function forceReload() {
  // Modifiez la valeur de la chaîne de requête pour chaque fichier
  const stylesLink = document.querySelector('link[href="styles.css"]');
  stylesLink.href = 'styles.css?v=' + new Date().getTime();

  const scriptTag = document.querySelector('script[src="script.js"]');
  scriptTag.src = 'script.js?v=' + new Date().getTime();
}

//fonction permettant l'appel de l'api météo
async function callAPI() {

    deleteAllCookies(); //suppression des cookies
    clearNavigationHistory(); //suppression de l'historique

    var city =  await getCity(); //récupération de la ville choisie

    //paramètres de la requête
    var access_key = "cd3636c96d801f29373faa8ed40b8e96";
    var query = city;

    var url="http://api.weatherstack.com/current?access_key="+access_key+"&query="+query; //url de la requête api
    console.log(url)
    
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