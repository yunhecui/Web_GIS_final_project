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
zoom: 0.6,
});

// disable map zoom using scroll
map.scrollZoom.disable();

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());


map.on('load', function(){
  map.addLayer({
    'id':'immi-choro',
    'type': 'fill',
    'source': {
      'type': 'vector',
      'url': 'mapbox://yunhecui.bf6vvkx1'},
    'source-layer' : 'immi_final_shp-6e8pfg',
    'maxzoom': 5,
    'type': 'fill',
    'paint':{
      'fill-color':[
        'interpolate',
        ['linear'],
        ['get','1820s'],
        0, '#f5e7fe',
        100, '#eacefd',
        500, '#e0b6fc',
        1000, '#d69dfb',
        2500, '#cb85fa',
        5000, '#c16cf9',
        7500, '#b754f8',
        10000, '#ad3bf7',
        25000, '#a223f6',
        50000, '#980af5',
        100000,'#7a08c4',
        150000,'#6a07ab',
        200000,'#57068c',
      ],
      'fill-opacity': 1
    },
  }, 'waterway-label');
});

// filter:['==', ['number', ['get','time']],1820]

document.getElementById('slider').addEventListener('input', function(e){
  var range = parseInt(e.target.value);
  var decade = range*10 + 1820;
  // map.setFilter('immi-choro',['==',['number',['get','Decade']], decade]);

  var time = decade + 's';


  document.getElementById('active-year').innerText = time;
  map.setPaintProperty('immi-choro', 'fill-color',[
    'interpolate',
      ['linear'],
      ['get', time],
      0, '#f5e7fe',
      100, '#eacefd',
      500, '#e0b6fc',
      1000, '#d69dfb',
      2500, '#cb85fa',
      5000, '#c16cf9',
      7500, '#b754f8',
      10000, '#ad3bf7',
      25000, '#a223f6',
      50000, '#980af5',
      100000,'#7a08c4',
      150000,'#6a07ab',
      200000,'#57068c',
  ])

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
  zoom: 0.6,
})
});


var divElement = document.getElementById('viz1557761578051');
var vizElement = divElement.getElementsByTagName('object')[0];
vizElement.style.width='100%';vizElement.style.height='100%';
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);
