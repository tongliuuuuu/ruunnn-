// Initialize map
mapboxgl.accessToken = 'pk.eyJ1IjoibGVtb245MzAyIiwiYSI6ImNpdTNsNW83MTBoZG0yb2xrdXpwcXR6cTMifQ.mxXMrYp7gRrbTS125K3RiQ'; // replace this value with your own access token from Mapbox Studio

var map = new mapboxgl.Map({
    container: 'map', // this is the ID of the div in index.html where the map should go
    center: [-78.526668,38.036223], // set the centerpoint of the map programatically. Note that this is [longitude, latitude]!
    zoom: 12.6, // set the default zoom programatically
    style: 'mapbox://styles/lemon9302/cjnc4htrd0bxn2sqeqbtwyesb', // replace this value with the style URL from Mapbox Studio
    customAttribution: 'City of Charlottesville Open Data Portal (http://opendata.charlottesville.org/)', // Custom text used to attribute data source(s)
});

map.on('load', function () {
      map.addLayer({
        "id": "251892957",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.dzwwkwbr'
        },
        "source-layer": "Routeline_251892957-6qskgl",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "251447145",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.91satxl0'
        },
        "source-layer": "Routeline_251447145-a5nw0h",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "251445567",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.akdaskmw'
        },
        "source-layer": "Routeline_251445567-39uxef",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "250787053",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.83q0t6s1'
        },
        "source-layer": "Routeline_250787053-4zv49n",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "369827",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.78cz1weu'
        },
        "source-layer": "Routeline_369827-6tcemz",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "334911",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.4pcvsgue'
        },
        "source-layer": "Routeline_334911-7o913o",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "217738",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.aguhjx5n'
        },
        "source-layer": "Routeline_217738-205m85",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "217645",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.6etvlk9y'
        },
        "source-layer": "Routeline_217645-a34tc0",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "208997",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.b6b3khlz'
        },
        "source-layer": "Routeline_208997-3k4zby",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "206724",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.dp5op6vz'
        },
        "source-layer": "Routeline_206724-0kqwa1",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "198182",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.5n3gg46h'
        },
        "source-layer": "Routeline_198182-2ejhf9",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "193459",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.cd4plvxf'
        },
        "source-layer": "Routeline_193459-1yqzfb",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "182953",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.csltlotr'
        },
        "source-layer": "Routeline_182953-1lopz2",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "181243",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.a6i9conb'
        },
        "source-layer": "Routeline_181243-0n82oz",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "175965",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.789k13sw'
        },
        "source-layer": "Routeline_175965-0qfvw2",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "111106",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.51ctjd3m'
        },
        "source-layer": "Routeline_111106-2j9gqp",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "82826",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.0ije0hrs'
        },
        "source-layer": "Routeline_82826-39h30c",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "42596",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.bcr0d9en'
        },
        "source-layer": "Routeline_42596-dnvtjc",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });

            map.addLayer({
        "id": "29850",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://lemon9302.57k60539'
        },
        "source-layer": "Routeline_29850-8avh3f",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'none',
        },
        "paint": {
            "line-color": "#ff69b4",
            "line-width": 3
        }
    });
});






// Show modal when About button is clicked
$("#about").on('click', function() { // Click event handler for the About button in jQuery, see https://api.jquery.com/click/
    $("#screen").fadeToggle(); // shows/hides the black screen behind modal, see https://api.jquery.com/fadeToggle/
    $(".modal").fadeToggle(); // shows/hides the modal itself, see https://api.jquery.com/fadeToggle/
});

$(".modal>.close-button").on('click', function() { // Click event handler for the modal's close button
    $("#screen").fadeToggle();
    $(".modal").fadeToggle();
});

map.on('load', function() {
    $('.modal-text').slideToggle('slow');

});


// Legend
var layers = [ // an array of the possible values you want to show in your legend
    'Civic Spaces',
    'Community Park',
    'Neighborhood Park',
    'Cemetery',
    'Urban Park',
    'Regional Park'
];

var colors = [ // an array of the color values for each legend item
    '#800000',
    '#800030',
    '#800060',
    '#80006c',
    '#800090',
    '#80009c'
];

// for loop to create individual legend items
for (i=0; i<layers.length; i++) {
    var layer =layers[i]; // name of the current legend item, from the layers array
    var color =colors[i]; // color value of the current legend item, from the colors array 
    
    var itemHTML = "<div><span class='legend-key'></span><span>" + layer + "</span></div>"; // create the HTML for the legend element to be added
    var item = $(itemHTML).appendTo("#legend"); // add the legend item to the legend
    var legendKey = $(item).find(".legend-key"); // find the legend key (colored circle) for the current item
    legendKey.css("background", color); // change the background color of the legend key
}

// 10.25 starts here----------------------------------------------
// INFO WINDOW CODE 
    // Create a popup on click 
    map.on('click', function(e) {   // Event listener to do some code when user clicks on the map

      var routes = map.queryRenderedFeatures(e.point, {  // Query the map at the clicked point. See https://www.mapbox.com/mapbox-gl-js/example/queryrenderedfeatures/ for an example on how queryRenderedFeatures works and https://www.mapbox.com/mapbox-gl-js/api/#map#queryrenderedfeatures for documentation
        layers: ['cville-routepoints']    // replace this with the name of the layer from the Mapbox Studio layers panel
    });

      // if the layer is empty, this if statement will exit the function (no popups created) -- this is a failsafe to avoid non-functioning popups
      if (routes.length == 0) {
        $('#info-window').slideUp();
        return;
    }
        $('#info-window').slideDown();
          $('#distance').html(routes[0].properties.Distance);
          $('#Elevation').html(routes[0].properties.Elevation);
          $('#Date').html(routes[0].properties.Date);
          


             map.flyTo({
             center: [routes[0].properties.Corx, routes[0].properties.Cory],
             zoom: 15,
             curve: 1,
             bearing:20,
             pitch:15
             });
  

        $("#zoomin").on('click', function() { 
              map.setLayoutProperty(routes[0].properties.Number, 'visibility', 'visible');
        });

        $("#clear").on('click', function() { 
              var layers = [
             '42596',
             '29850',
             '82826',
             '111106',
             '175965',
             '181243',
             '182953',
             '193459',
             '198182',
             '206724',
             '208997',
             '217645',
             '217738',
             '334911',
             '369827',
             '250787053',
             '251445567',
             '251447145',
             '251892957',
              ]
              

              for (i=0; i<layers.length; i++) {
              map.setLayoutProperty(layers[i], 'visibility', 'none');
              };

             map.flyTo({
             center: [-78.526668,38.036223],
             zoom: 12.6,
             bearing: 0,
             pitch:0,
             });
             

        });
    });
    
        map.on('mouseenter','cville-routepoints', function(e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';
        
        var routes = map.queryRenderedFeatures(e.point, {  // Query the map at the clicked point. See https://www.mapbox.com/mapbox-gl-js/example/queryrenderedfeatures/ for an example on how queryRenderedFeatures works and https://www.mapbox.com/mapbox-gl-js/api/#map#queryrenderedfeatures for documentation
        layers: ['cville-routepoints']    // replace this with the name of the layer from the Mapbox Studio layers panel
    });

      // if the layer is empty, this if statement will exit the function (no popups created) -- this is a failsafe to avoid non-functioning popups

    // Initiate the popup
    var popup = new mapboxgl.Popup({ 
        closeButton: true, // If true, a close button will appear in the top right corner of the popup. Default = true
        closeOnClick: true, // If true, the popup will automatically close if the user clicks anywhere on the map. Default = true
        anchor: 'bottom', // The popup's location relative to the feature. Options are 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left' and 'bottom-right'. If not set, the popup's location will be set dynamically to make sure it is always visible in the map container.
        offset: [0, -15] // A pixel offset from the centerpoint of the feature. Can be a single number, an [x,y] coordinate, or an object of [x,y] coordinates specifying an offset for each of the different anchor options (e.g. 'top' and 'bottom'). Negative numbers indicate left and up.
    });

      // Set the popup location based on each feature
      popup.setLngLat(routes[0].geometry.coordinates);

      // Set the contents of the popup window
      popup.setHTML('<h2>Route name: </h2><h3>' + routes[0].properties.Name + '</h3>');
            // stops[0].properties.stop_id will become the title of the popup (<h3> element)
            // stops[0].properties.stop_name will become the body of the popup


        // popup.setHTML('<p>' + stops[0].properties.stop_name + '</p>')




                      // var marker = new mapboxgl.Marker()
                      // marker.setLngLat(routes[0].geometry.coordinates);

                      // // marker.bindPopup('<button class="button-default" >Click for more</button>');

                      // // return marker;      
                      // marker.addTo(map);

      // Add the popup to the map 
      popup.addTo(map);  // replace "map" with the name of the variable in line 4, if different

       map.on('mouseleave', 'cville-routepoints', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
  });


$("#about").on('click', function() { 
  map.flyTo({
             center: [-78.526668,38.036223],
             zoom: 12.6,
             bearing: 0,
             pitch:0,
             speed:0.5,
             });

  $('#info-window').slideUp();

}); 

// 11.01 starts here----------------------------------------------

// SHOW/HIDE LAYERS
// See example at https://www.mapbox.com/mapbox-gl-js/example/toggle-layers/
    
    // var layers = [  // an array of the layers you want to include in the layers control (layers to turn off and on)

    //     // [layerMachineName, layerDisplayName]
    //     // layerMachineName is the layer name as written in your Mapbox Studio map layers panel
    //     // layerDisplayName is the way you want the layer's name to appear in the layers control on the website
    //     ['cville-bus-stops', 'Bus Stops'],                      // layers[0]
    //     ['cville-parks', 'Parks'],                              // layers[1][1] = 'Parks'
    //     ['cville-bike-lanes', 'Bike Lanes'],     
    //     ['cville-bus-stops-heatmap', 'Bus Stop Heatmap'],
    //     ['background', 'Map background']
    //     // add additional live data layers here as needed
    // ]; 

    // // functions to perform when map loads
    // map.on('load', function () {
        
        
    //     for (i=0; i<layers.length; i++) {

    //         // add a button for each layer
    //         $("#layers-control").append("<a href='#' class='active button-default' id='" + layers[i][0] + "'>" + layers[i][1] + "</a>"); // see http://api.jquery.com/append/
    //     }

    //     // show/hide layers when button is clicked
    //     $("#layers-control>a").on('click', function(e) {

    //             var clickedLayer = e.target.id;

    //             e.preventDefault();
    //             e.stopPropagation();

    //             var visibility = map.getLayoutProperty(clickedLayer, 'visibility');  // see https://www.mapbox.com/mapbox-gl-js/api/#map#getlayoutproperty
    //             console.log(visibility);

    //             if (visibility === 'visible') {
    //                 map.setLayoutProperty(clickedLayer, 'visibility', 'none');  // see https://www.mapbox.com/mapbox-gl-js/api/#map#setlayoutproperty
    //                 $(e.target).removeClass('active');
    //             } else {
    //                 $(e.target).addClass('active');
    //                 map.setLayoutProperty(clickedLayer, 'visibility', 'visible'); // see https://www.mapbox.com/mapbox-gl-js/api/#map#setlayoutproperty
    //             }
    //     });
    // });


// CHANGE LAYER STYLE
// Refer to example at https://www.mapbox.com/mapbox-gl-js/example/color-switcher/
    
    var swatches = $("#swatches");

    var colors = [  // an array of color options for the bus stop ponts
        '#F44336',
        '#e91e63',
        '#9c27b0',
        '#673ab7'
    ]; 

    var layer = 'cville-bus-stops';

    colors.forEach(function(color) {
        var swatch = $("<button class='swatch'></button>").appendTo(swatches);

        $(swatch).css('background-color', color); 

        $(swatch).on('click', function() {
            map.setPaintProperty(layer, 'circle-color', color); // 'circle-color' is a property specific to a circle layer. Read more about what values to use for different style properties and different types of layers at https://www.mapbox.com/mapbox-gl-js/style-spec/#layers
        });

        $(swatches).append(swatch);
    });

// 11.08 starts here----------------------------------------------
// SCROLL TO ZOOM THROUGH SITES
    
    // A JavaScript object containing all of the data for each site "chapter" (the sites to zoom to while scrolling)
    var chapters = {
        'darden-towe': {
            name: "Darden Towe Park", 
            description: "Ut nisl quam, fringilla efficitur elementum in, congue vel mi. Nullam consequat pharetra nibh, non accumsan nisl cursus sed. Pellentesque at ex lacus. Ut fringilla nunc id leo maximus ullamcorper. Donec volutpat placerat accumsan. Nulla id luctus diam. Aliquam tincidunt pulvinar mattis. Donec tempor, massa vel vehicula feugiat, diam sem suscipit nisi, eu tempor turpis lorem ac ipsum. Proin quis lectus mattis enim luctus faucibus sit amet vel metus. Etiam luctus nunc eget velit vestibulum posuere. Maecenas enim velit, elementum a suscipit vel, bibendum in odio. Nunc porta, eros nec vehicula pretium, tellus sapien fermentum risus, a pulvinar elit libero ut nisi. Nunc interdum lacus eu ornare dapibus. Suspendisse vitae diam eu turpis venenatis tempor. Ut sodales vel ex finibus facilisis. Nunc hendrerit, augue eget vulputate pellentesque, nibh erat imperdiet justo, id iaculis risus sem commodo urna.",
            imagepath: "img/Darden Towe.jpg",
            bearing: 0, // angle of the view
            center: [ -78.450021, 38.042260],
            zoom: 15.20,
            pitch: 60  //tilt
        },
        'mcguffey-park': {
            name: "McGuffey Park",
            description: "Aliquam mollis consequat libero, at egestas mi facilisis in. Maecenas sed porta arcu, nec mattis ligula. Sed a porta arcu. Aliquam vel nulla ac orci volutpat ullamcorper. Duis quis auctor urna. Duis id felis vel velit sagittis bibendum. Praesent rutrum velit vel est iaculis, et viverra sapien placerat. Suspendisse potenti. In interdum eu lorem ac cursus. Integer pulvinar lacus nec metus consequat vehicula. Aliquam efficitur vitae neque sed aliquam. Fusce interdum tempor neque vel interdum. Praesent dapibus sollicitudin arcu id finibus. Mauris risus magna, egestas in tristique et, egestas id arcu. Proin leo urna, sollicitudin non mattis in, tempor non nisi. Praesent commodo nibh sit amet dapibus egestas.",
            imagepath: "img/McGuffey Park.jpg",
            bearing: 0,
            center: [ -78.481707, 38.033021],
            zoom: 17.18,
            pitch: 0
        },
        'mcintire-park': {
            name: "McIntire Park",
            description: "Fusce iaculis nulla ut augue posuere, sit amet vestibulum quam elementum. Integer quis varius sem. Mauris fermentum tempus congue. Nulla facilisi. Vestibulum congue cursus tempor. Sed sit amet venenatis magna. Duis fermentum ligula eget auctor eleifend. Aenean ullamcorper arcu et diam pharetra, a pretium lectus porttitor. Donec non lacinia est. Nullam nec felis turpis. Curabitur hendrerit porta dolor, vitae vehicula est dictum id. Ut sollicitudin lectus est, et egestas felis tempus eu. Sed at dictum ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam et diam rutrum orci placerat euismod quis vitae dui. Praesent aliquam, quam ac suscipit laoreet, metus nulla mattis justo, et egestas lectus eros ac nulla.",
            imagepath: "img/McIntire Park.jpg",
            bearing: 20,
            center: [ -78.475470, 38.047131],
            zoom: 15,
            pitch: 50
        },
        'rivanna-river': {
            name: "Rivanna River",
            description: "Aenean rutrum finibus ex, quis mollis ante eleifend in. Vestibulum faucibus augue tellus, ac auctor tellus maximus sit amet. Nulla quis rutrum felis. Nullam a facilisis mi, in pretium orci. Vestibulum tempus odio et accumsan lacinia. Duis tempus, dolor sit amet tristique tempus, nisl neque tristique lacus, quis viverra est risus id quam. Donec condimentum massa vitae dui consectetur vehicula. Vivamus interdum nisi sed blandit fermentum. Proin a magna et est varius euismod non quis turpis. Cras rhoncus, nulla non faucibus vestibulum, felis nunc finibus nisi, dictum sollicitudin nibh leo non lorem. Donec ut nulla id nunc elementum luctus. Fusce sed justo ac metus pretium auctor ut eget magna. Vestibulum rhoncus nibh sit amet varius tincidunt.",
            imagepath: "img/Rivanna River.jpg",
            bearing: 0,
            center: [ -78.458309, 38.034810],
            zoom: 16.13,
            pitch: 25
        }
    };

    console.log(chapters['darden-towe']['name']);
    console.log(Object.keys(chapters)[0]);

    // Add the chapters to the #chapters div on the webpage
    for (var key in chapters) {
        var newChapter = $("<div class='chapter' id='" + key + "'></div>").appendTo("#chapters");
        var chapterHTML = $("<h2>" + chapters[key]['name'] + "</h2><img src='" + chapters[key]['imagepath'] + "'><p>" + chapters[key]['description'] + "</p>").appendTo(newChapter);
    }


    $("#chapters").scroll(function(e) {

        var chapterNames = Object.keys(chapters);

        for (var i = 0; i < chapterNames.length; i++) {

            var chapterName = chapterNames[i];
            var chapterElem = $("#" + chapterName);

            if (chapterElem.length) {

                if (checkInView($("#chapters"), chapterElem, true)) {
                    setActiveChapter(chapterName);
                    $("#" + chapterName).addClass('active');

                    break;

                } else {
                    $("#" + chapterName).removeClass('active');
                }
            }
        }
    });

    var activeChapterName = '';
    
    function setActiveChapter(chapterName) {
        if (chapterName === activeChapterName) return;

        map.flyTo(chapters[chapterName]);

        activeChapterName = chapterName;
    }

    function checkInView(container, elem, partial) {
        var contHeight = container.height();
        var contTop = container.scrollTop();
        var contBottom = contTop + contHeight ;

        var elemTop = $(elem).offset().top - container.offset().top;
        var elemBottom = elemTop + $(elem).height();


        var isTotal = (elemTop >= 0 && elemBottom <=contHeight);
        var isPart = ((elemTop < 0 && elemBottom > 0 ) || (elemTop > 0 && elemTop <= container.height())) && partial ;

        return  isTotal  || isPart ;
    }


// ADD GEOJSON DATA (static layers)

    // // See example at https://www.mapbox.com/mapbox-gl-js/example/live-geojson/
    // var staticUrl = 'https://opendata.arcgis.com/datasets/edaeb963c9464edeb14fea9c7f0135e3_11.geojson';
    // map.on('load', function () {
    //     window.setInterval(function() { // window.setInterval allows you to repeat a task on a time interval. See https://www.w3schools.com/jsref/met_win_setinterval.asp
    //         console.log();
    //         map.getSource('polling-places').setData(staticUrl);
    //     }, 2000); // 2000 is in milliseconds, so every 2 seconds. Change this number as needed but be aware that more frequent requests will be more processor-intensive, expecially for large datasets.
        
    //     map.addSource('polling-places', { type: 'geojson', data: staticUrl });
    //     map.addLayer({
    //         "id": "polling-places",
    //         "type": "symbol", // color, paint, 
    //         "source": "polling-places",
    //         "layout": {
    //             "icon-image": "embassy-15"
    //         }
    //     });
    // });

