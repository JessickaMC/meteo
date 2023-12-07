import json
import requests

# Spécifiez le chemin complet vers votre fichier JSON
urlcity="D:\Git\projets\meteo\config.json"

# Ouvrir le fichier JSON en mode lecture
with open(urlcity, 'r') as fichier:
    # Charger le contenu JSON depuis le fichier
    contenu_json = json.load(fichier)

# Maintenant, contenu_json contient les données du fichier JSON
print(contenu_json)
print(contenu_json['ville'])

url = "http://api.weatherstack.com/current"
params = {
    "access_key": "cc0ec2c6072259e9e860d22017ba42c9",
    "query": contenu_json['ville']
}

response = requests.get(url, params=params)

if response.status_code == 200:
    data = response.json()
    # Now 'data' contains the weather information for New York
    print(data)
    print('-----------------------------------')
    city = data['location']['name']
    print("city: ",city)
    temperature = data['current']['temperature']
    print("temperature: ",temperature)
    icon = data['current']['weather_icons'][0]
    print("icon: ",icon)
    description = data['current']['weather_descriptions'][0]
    print("description: ",description)
    feelslike = data['current']['feelslike']
    print("feelslike: ",feelslike)
    humidity = data['current']['humidity']
    print("humidity: ",humidity)

else:
    # Print an error message if the request was not successful
    print(f"Error: {response.status_code}, {response.text}")


