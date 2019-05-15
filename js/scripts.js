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




// filter:['==', ['number', ['get','time']],1820]

document.getElementById('slider').addEventListener('input', function(e){
  var range = parseInt(e.target.value);
  var decade = range*10 + 1820;
  // map.setFilter('immi-choro',['==',['number',['get','Decade']], decade]);

  var time = decade + 's';


  document.getElementById('active-year').innerText = time;

})

map.on('load', function(){
  map.addLayer({
    'id':'immi-choro',
    'type': 'fill',
    'source': {
      'type': 'vector',
      'data': 'mapbox://yunhecui.bz57od2e'},
    'source-layer' : 'immi_melt_selection-0yxkk7',
    'maxzoom': 5,
    'type': 'fill',
    'paint':{
      'fill-color':[
        'interpolate',
        ['linear'],
        ['number',['get','Immi_num']],
        0, '#CCCCCC',
        500, '#EED322',
        750, '#E6B71E',
        1000, '#DA9C20',
        2500, '#CA8323',
        5000, '#B86B25',
        7500, '#A25626',
        10000, '#8B4225',
        25000, '#723122'
      ],
      'fill-opacity': 0.75
    },
    filter:['==',['number',['get','Decade']],1820]
  }, 'waterway-label');
});


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
});




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
vizElement.style.width='100%';vizElement.style.height='100%';
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);
