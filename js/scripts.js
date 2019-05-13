// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



mapboxgl.accessToken = 'pk.eyJ1IjoieXVuaGVjdWkiLCJhIjoiY2p1NDhncHp3MGJwNTQ1bnd5aTEyODdxNCJ9.8XO2bpiop4ue0tLtzDbcig';
var map = new mapboxgl.Map({
container: 'mapContainer',
style: 'mapbox://styles/mapbox/light-v10',
center: [150, 35],
zoom: 0.54,
});

// disable map zoom using scroll
map.scrollZoom.disable();

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

Captial.forEach(function(capital) {
  map.on('load', function(){
    map.addLayer({
      id: `capitals-${capital.city}`,
      type: 'circle',
      source:{
        type: 'geojson',
        data:{
          type: 'Feature',
          geometry:{
            type: 'Point',
            coordinates: [capital.long, capital.lat],
          },
          properties:{
            country: capital.country,
            city: capital.city,
            pop: capital.pop_in_k,
          }
        }
      },
      paint: {
        'circle-color':'red',
        'circle-radius':{
          'base': 6,
          'stops':[[0,4], [22,1000]]
        },
        }
    })
  })
})

document.getElementById('enableScroll').addEventListener('click', function () {
// Fly to a random location by offsetting new york city latlong
map.scrollZoom.enable();
});
document.getElementById('disableScroll').addEventListener('click', function () {
// Fly to a random location by offsetting new york city latlong
map.scrollZoom.disable();
});
document.getElementById('resetMap').addEventListener('click', function () {
// Fly to a random location by offsetting new york city latlong
map.scrollZoom.disable();
map.flyTo({
  center: [150, 35],
  zoom: 0.54,
})
});


var divElement = document.getElementById('viz1557761578051');
var vizElement = divElement.getElementsByTagName('object')[0];
vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);
