var map;
var marker;

function initialize() {
  LatLng = new google.maps.LatLng(39.2661, -74.5422)
  var mapOptions = {
    center: LatLng,
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.STYLED
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    //var marker = new google.maps.Marker({
    //position: LatLng,
    //map: map,
    //title: 'Absolute Italy'
    //});

  setMarkers(map, dealers);
}

/**
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */
var dealers = [
  ['Valentino Constantinou', 42.0488197, -87.6883857, 4, '<div><div style="font-size: 15px;">Evanston, IL (Chicago)</div><br>Valentino Constantinou<br>phone: (865) 387-6121<br>email: <a href="mailto:experiencenovo@gmail.com">experiencenovo@gmail.com</a><br></div>'],
  ['Garrett Headden', 35.9584634, -83.9250825, 1, '<div><div style="font-size: 15px;">Knoxville, TN</div><br>Garrett Headden<br>phone: (865) 696-9382<br>email: <a href="mailto:experiencenovo@gmail.com">experiencenovo@gmail.com</a><br></div>'],
  ['Trevor Overman', 35.920959, -79.0392909, 3, '<div><div style="font-size: 15px;">Chapel Hill, NC (Raleigh)</div><br>Trevor Overman<br>phone: (865) 679-7229<br>email: <a href="mailto:experiencenovo@gmail.com">experiencenovo@gmail.com</a><br></div>'],
  ['Michael Thompson', 40.0047528, -75.1180329, 5, '<div><div style="font-size: 15px;">Philadelphia, PA</div><br>Michael Thompson<br>phone: (336) 580-0855<br>email: <a href="mailto:experiencenovo@gmail.com">experiencenovo@gmail.com</a><br></div>'],
];

function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.
  var image = {
    url: '/images/tri30.png',
    // This marker is 30 pixels wide by 26 pixels tall.
    size: new google.maps.Size(30, 26),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(15, 26)
  };
  // Shapes define the clickable region of the icon.
  // The type defines an HTML &lt;area&gt; element 'poly' which
  // traces out a polygon as a series of X,Y points. The final
  // coordinate closes the poly by connecting to the first
  // coordinate.
  var shape = {
      coords: [1, 1, 1, 30, 31, 30, 31, 1],
      type: 'poly'
  };
  for (var i = 0; i < locations.length; i++) {
    var dealer = locations[i];
    var dealerLatLng = new google.maps.LatLng(dealer[1], dealer[2]);
    var marker = new google.maps.Marker({
        position: dealerLatLng,
        map: map,
        icon: image,
        shape: shape,
        title: dealer[0],
        zIndex: dealer[3]
    });
    var content = dealer[4];
    var infowindow = new google.maps.InfoWindow;

    bindInfoW(marker, content, infowindow);
    }

    function bindInfoW(marker, content, infowindow)
    {
      google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(content);
          infowindow.open(map, marker);
      });
    }
  }

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
      '&signed_in=true&callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript