/* GPS Coordinates: http://www.gps-coordinates.net/  */

L.mapbox.accessToken = 'pk.eyJ1IjoiZ3djMTIzIiwiYSI6Ijg4MDA0ZWZhMTM3YzE0NjQ4NDI3ZDcyYzU5NzlmZWM3In0.PYQSdYE0Nz09noBL-4vmXA';
var map = L.mapbox.map('map', 'examples.map-20v6611k')
  .setView([38.12367, -76.81229], 9);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geojson = {
    type: 'FeatureCollection',
    
// This is an array of Map Point objects
    features: [
    
    {
        type: 'Feature',
        properties: {
            title: 'Osteria Morini ',
            description: '218 Lafayette Street, New York, NY 10012<a href="http://www.yelp.com/biz/osteria-morini-new-york"><img src="http://i62.tinypic.com/168dco9.jpg" width="200" height="100"</a>/>',
            'marker-color': '#f9d62e',
            'marker-size': 'medium',
            'marker-symbol': 'restaurant',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.99778900000001, 40.721993]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Umami Burger',
            description: '432 6th Avenue, New York, NY 10011<a href="http://www.yelp.com/biz/umami-burger-new-york"><img src="http://i.ytimg.com/vi/UgfTWlj5KK4/maxresdefault.jpg" width="200" height = "100"</a>/>',
            'marker-color': '#eae374',
            'marker-size': 'medium',
            'marker-symbol': 'restaurant',
        },
        geometry: {
            type: 'Point',
            coordinates: [ -73.998628,40.734401]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Mon Petit Cafe',
            description: '801 Lexington Avenue, New York, NY 10021<a href="http://www.yelp.com/biz/mon-petit-cafe-new-york"><img src="http://s3-media3.fl.yelpcdn.com/bphoto/XhxMOVv52sW2CXR8NyPwwA/l.jpg"width="200",height="100"</a>/>',
            'marker-color': '#BE9A6B',
            'marker-size': 'large',
            'marker-symbol': 'bakery',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.966714,40.763936]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Pisticci Ristorante',
            description: '125 La Salle Street, New York, NY 10027<a href="http://www.yelp.com/biz/pisticci-new-york?osq=Pisticci+Ristorante"><img src="http://i61.tinypic.com/2rdvryt.jpg" width="200" height="100"</a>/>',
            'marker-color': '#7ec9b1',
            'marker-size': 'medium',
            'marker-symbol': 'restaurant',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.96031169999998, 40.81420200000001]
        }
    },
        {
        type: 'Feature',
        properties: {
            title: 'Alices Tea Cup',
            description: '102 West 73rd Street, New York, NY 10023<a href="http://www.yelp.com/biz/alices-tea-cup-new-york"><img src="http://tickettotasty.com/wordpress/wp-content/uploads/2012/03/tea1.jpg"width="200"height="100"</a>/>',
            'marker-color': '#fc913a',
            'marker-size': 'medium',
            'marker-symbol': 'bakery',
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.978683,40.778041]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Dough',
            description: '14 West 19th Street, New York, NY 10011<a href="http://www.yelp.com/biz/dough-new-york-2"><img src="http://joannepioblog.com/wp-content/uploads/2014/02/dough-loco-3.jpg"width="200",height="100"</a>/>',
            'marker-color': '#ff4e50',
            'marker-size': 'medium',
            'marker-symbol': 'cafe',
        },
        geometry: {
            type: 'Point',
            coordinates: [ -73.992405,40.739347]
        }
    },
 {
     type: 'Feature',
     properties:{
     title: 'Good Enough to Eat ',
     description: '520 Columbus Avenue, New York, NY 10024<a href="http://www.yelp.com/biz/good-enough-to-eat-new-york"><img src="http://assets3.thrillist.com/v1/image/1427882/size/tmg-article_tall/the-ultimate-uptown-nyc-brunch-guide"width="200",height="100"</a>/>',
     'marker-color': '#EF796C',
     'marker-size': 'medium',
     'marker-symbol': 'bakery',
 },
        geometry:{
        type:'Point',
        coordinates: [-73.97269970000002, 40.7858569]
        }
 },
 {
        type:'Feature',
        properties:{
        title:'Maid Cafe',
        description:' 150 Centre Street, New York, NY 10013<a href="http://www.yelp.com/biz/maid-cafe-ny-new-york"><img src="http://www.fodors.com/ee/files/slideshows/6-homeworld-maid-cafe-tokyo.jpg"width="200",height"100"</a>/>',
        'marker-color': '#7C5513',
        'marker-size': 'medium',
        'marker-symbol':'cafe',
        },
        geometry:{
        type:'Point',
        coordinates:[-74.000162,40.717424]
        }
        },
        {
        type: 'Feature',
        properties: {
            title: 'Flor De Mayo',
            description: '484 Amsterdam Avenue, New York, NY 10024<a href="http://www.yelp.com/biz/flor-de-mayo-new-york-2"><img src="http://s3-media2.fl.yelpcdn.com/bphoto/GWUsfUVjPdkKqMninVmRTg/o.jpg"width="200",height"100"</a>/>',
            'marker-color': '#ff4e50',
            'marker-size': 'medium',
            'marker-symbol': 'restaurant',
        },
        geometry: {
            type: 'Point',
            coordinates:[ -73.976573,40.786084 ]

        }
    },
        
    ]
};   
 
myLayer.setGeoJSON(geojson); // Adds all of the markers to the map

map.on('ready', function() {
    // featureLayer.getBounds() returns the corners of the furthest-out markers,
    // and map.fitBounds() makes sure that the map contains these.
    map.fitBounds(myLayer.getBounds());
});