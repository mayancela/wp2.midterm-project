window.onload = function() { //event hooking being used to prevent style == null
    container();
    function container() {
        mapboxgl.accessToken = 'pk.eyJ1IjoibWF5YW5jZWxhIiwiYSI6ImNrZW15dndpbjBhNnYycW05dHRoeTNpM2UifQ.qxvnr-g9i_1rgUdqiA4JWw';
          var map = new mapboxgl.Map({
              container: 'map',
              style: 'mapbox://styles/mapbox/streets-v11',
              center: [-73.986470, 40.750751],
              zoom: 11.50
          });

          //location array contains longitude, latitude format
          var locations = [
            [-73.977360],
            [40.784917],
            [-73.959294],
            [40.729653],
            [-73.992426],
            [40.717520],
            [-73.950586],
            [40.705761],
            [-73.900558],
            [40.767853]
          ];

          for(var i = 0; i < locations.length - 1; i++){
            var marker = new mapboxgl.Marker()
            .setLngLat([locations[i],locations[i+1]])
            .addTo(map);
          }
          map.on('load', function() {
            map.addSource('places', {
              'type': 'geojson',
              'data': {
                  'type': 'FeatureCollection',
                  'features': [
                    {
                      'type': 'Feature',
                      'properties': {
                          'description':
                              '<strong>The Sill</strong><p> Garden center in New York, New York </p> <p style="text-align:center;"><a href="https://www.thesill.com/" target="_blank" title="Opens in a new window">Visit Their Store</a> </p>',
                          'icon': 'marker'
                      },
                      'geometry': {
                          'type': 'Point',
                          'coordinates': [-73.977360, 40.784917]
                      }
                    },
                    {
                      'type': 'Feature',
                      'properties': {
                          'description':
                              '<strong>Greenery Unlimited</strong><p> Plant nursery in Brooklyn, New York</p> <p style="text-align:center;"><a href="https://greeneryunlimited.co/" target="_blank" title="Opens in a new window">Visit Their Store</a></p>',
                          'icon': 'marker'
                      },
                      'geometry': {
                          'type': 'Point',
                          'coordinates': [-73.959294, 40.729653]
                      }
                    },
                    {
                      'type': 'Feature',
                      'properties': {
                          'description':
                              '<strong>Dahing Plants</strong><p>Plant nursery in New York, New York</p> <p style="text-align:center;"><a href="http://www.dahingplants.com/" target="_blank" title="Opens in a new window">Visit Their Store</a></p>',
                          'icon': 'marker'
                      },
                      'geometry': {
                          'type': 'Point',
                          'coordinates': [-73.992426, 40.717520]
                      }
                    },
                    {
                      'type': 'Feature',
                      'properties': {
                          'description':
                              '<strong>Nelly\'s Flowers And Plants</strong><p>Florist in Brooklyn, New York</p> <p style="text-align:center;"><a href="https://www.nellysflowershop.com/" target="_blank" title="Opens in a new window">Visit Their Store</a></p>',
                          'icon': 'marker'
                      },
                      'geometry': {
                          'type': 'Point',
                          'coordinates': [-73.950586, 40.705761]
                      }
                    },
                    {
                      'type': 'Feature',
                      'properties': {
                          'description':
                              '<strong>Verni\'s Garden Center</strong><p>Garden center in Queens, New York</p> <p style="text-align:center;"><a href="http://vernisgardencenter.com/index.html" target="_blank" title="Opens in a new window">Visit Their Store</a></p>',
                          'icon': 'marker'
                      },
                      'geometry': {
                          'type': 'Point',
                          'coordinates': [ -73.900556, 40.767861]
                      }
                    }
                  ]
                }
              });

          // Add a layer showing the places.
          map.addLayer({
            'id': 'places',
            'type': 'symbol',
            'source': 'places',
            'layout': {
              'icon-image': '{icon}-15',
              'icon-allow-overlap': true
            }
          });

          // When a click event occurs on a feature in the places layer, open a popup at the
          // location of the feature, with description HTML from its properties.
          map.on('click', 'places', function(e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(description)
              .addTo(map);
            });

            // Change the cursor to a pointer when the mouse is over the places layer.
            map.on('mouseenter', 'places', function() {
              map.getCanvas().style.cursor = 'pointer';
            });

            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'places', function() {
              map.getCanvas().style.cursor = '';
            });
          });
    }
}

// jquery for switching homepage image
$(document).ready(function(){
    $("img").click(function(){
        // Change src attribute of image
      	$("#homepage_img").attr("src", "images/plants-homepage-2.jpg");
    });
});

//ajax for more info for shopping page
$(document).ready(function(){
    'use strict';
    // find the desired selectors
    var btn = document.getElementById('request');
    var bio = document.getElementById('the-sill');

    var request = new XMLHttpRequest();
    // keep track of the request
    request.onreadystatechange = function() {
        // check if the response data send back to us
        if(request.readyState === 4) {
            // add a border
            bio.style.border = '1px solid #b5b5b5';
            // uncomment the line below to see the request
            // console.log(request);
            // check if the request is successful
            if(request.status === 200) {
              // update the HTML of the element
              bio.innerHTML = request.responseText;
            } else {
              // otherwise display an error message
              bio.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
            }
        }
    }
    // specify the type of request
    // register an event
    btn.addEventListener('click', function() {
    // hide the button
    this.style.display = 'none';
    // send the request
    request.open('Get', '../mission-statements/the-sill-ms.txt');

    request.send();
    });
});

$(document).ready(function(){
    'use strict';
    // find the desired selectors
    var btn = document.getElementById('request2');
    var bio = document.getElementById('houseplant-shop');

    var request = new XMLHttpRequest();
    // keep track of the request
    request.onreadystatechange = function() {
        // check if the response data send back to us
        if(request.readyState === 4) {
            // add a border
            bio.style.border = '1px solid #b5b5b5';
            // uncomment the line below to see the request
            // console.log(request);
            // check if the request is successful
            if(request.status === 200) {
              // update the HTML of the element
              bio.innerHTML = request.responseText;
            } else {
              // otherwise display an error message
              bio.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
            }
        }
    }
    // specify the type of request
    // register an event
    btn.addEventListener('click', function() {
    // hide the button
    this.style.display = 'none';
    // send the request
    request.open('Get', '../mission-statements/houseplant-shop-ms.txt');

    request.send();
    });
});

$(document).ready(function(){
    'use strict';
    // find the desired selectors
    var btn = document.getElementById('request3');
    var bio = document.getElementById('bloomscape');

    var request = new XMLHttpRequest();
    // keep track of the request
    request.onreadystatechange = function() {
        // check if the response data send back to us
        if(request.readyState === 4) {
            // add a border
            bio.style.border = '1px solid #b5b5b5';
            // uncomment the line below to see the request
            // console.log(request);
            // check if the request is successful
            if(request.status === 200) {
              // update the HTML of the element
              bio.innerHTML = request.responseText;
            } else {
              // otherwise display an error message
              bio.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
            }
        }
    }
    // specify the type of request
    // register an event
    btn.addEventListener('click', function() {
    // hide the button
    this.style.display = 'none';
    // send the request
    request.open('Get', '../mission-statements/bloomscape-ms.txt');

    request.send();
    });
});

//jquery + json
