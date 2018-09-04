var styles = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"poi","elementType":"labels", "stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}];
var sites = [
	
	['Hindley Street', -33.49003, -70.618009, 1,  
	`<div> 
	<img style="width:175px; height: 95px;"src="https://curico.cl/sitio/wp-content/uploads/2016/11/tenis-kids.jpg">
	<h2 style="font-size: 12px; color: #1EB2E8; line-height:16px;">Actividad nombre</h2></div>
	<p style=" font-size: 9px; color: #000000; line-height:12px; letter-spacing:0.18px;">Actividad dirección, <br> Actividad numero de dirección</p><br>
	<p style=" font-size: 9px; color: #000000; letter-spacing:0.18px;">Actividad descripcion</p><br>`, 
	'Hindley Street, a pub dedicated street.'],
	['Hindley Street', -33.440031, -70.632159
, 1,  
	`<div> 
	<img style="width:175px; height: 95px;"src="https://curico.cl/sitio/wp-content/uploads/2016/11/tenis-kids.jpg">
	<h2 style="font-size: 12px; color: #1EB2E8; line-height:16px;">Actividad nombre</h2></div>
	<p style="display:block; font-size: 9px; color: #000000; line-height:12px; letter-spacing:0.18px;">Actividad dirección, <br> Actividad numero de dirección</p>
	<p style="display:block; font-size: 9px; color: #000000; letter-spacing:0.18px;">Actividad descripcion</p>`, 
	'Hindley Street, a pub dedicated street.']
];
var image = 'https://s3.invisionapp-cdn.com/storage.invisionapp.com/assets/files/158619720?response-cache-control=max-age%3D2419200&x-amz-meta-av=1&response-content-type=image%2Fsvg%2Bxml&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1538352000&Signature=nQKUqbKpn%2BuaB1nowpH45m%2Fs2rA%3D';
var infowindow = null;
	
function initialize() {
	var centerMap = new google.maps.LatLng(-33.44889, -70.669265);
	var myOptions = {
		zoom: 10	,
		center: centerMap,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("gmap"), myOptions);
	
	setMarkers(map, sites);		
	setZoom(map, sites);
	
	
	infowindow = new google.maps.InfoWindow({
		content: "Loading..."
	});
	mapCenter = map.getCenter();
	map.setOptions({
    styles: styles
  });
}
/*
This functions sets the markers (array)
*/
function setMarkers(map, markers) {
	for (var i = 0; i < markers.length; i++) {
		var site = markers[i];
		var siteLatLng = new google.maps.LatLng(site[1], site[2]);
		
		var marker = new google.maps.Marker({
			position: siteLatLng,
			map: map,
			title: site[0],
			zIndex: site[3],
			html: site[4],
			icon: image,
			// Markers drop on the map
			animation: google.maps.Animation.DROP
		});
		
		google.maps.event.addListener(marker, "click", function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});
	}
}
/*
Set the zoom to fit comfortably all the markers in the map
*/
function setZoom(map, markers) {
	var boundbox = new google.maps.LatLngBounds();
	for ( var i = 0; i < markers.length; i++ )
	{
	  boundbox.extend(new google.maps.LatLng(markers[i][1], markers[i][2]));
	}
	map.setCenter(boundbox.getCenter());
	map.fitBounds(boundbox);
	
	
	
}


google.maps.event.addDomListener(window, 'load', initialize);

google.maps.event.addDomListener(window, "resize", function() {

  // Here you set the center of the map based on your "mapCenter" variable
  map.setCenter(mapCenter);

});




