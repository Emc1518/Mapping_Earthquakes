



  //We create the tile layer that will be the background of our map.
  let streets = L.tileLayer('https://api.mapbox.com/styles/v1/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
//dark map
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
}); 

let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets,
};

//createa the map object with center, zoom level and default layer
let map = L.map('mapid', {
  center: [43.7, -79.3], 
  zoom: 11, 
  layers: [satelliteStreets]
});

// Accessing the Toronto airline routes GeoJSON URL 
let torontoHoods = "https://raw.githubusercontent.com/Emc1518/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
    L.geoJSON(data).addTo(map)
});


