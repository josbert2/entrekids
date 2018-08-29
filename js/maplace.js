var data = [{
	    lat: 45.9,
	    lon: 10.9,
	    title: 'Title A1',
	    html: '<h3>Content A1</h3>',
	    zoom: 8,
	    icon: 'http://www.google.com/mapfiles/markerA.png'
	},{
	    lat: 44.8,
	    lon: 1.7,
	    title: 'Title B1',
	    html: '<h3>Content B1</h3>',
	    show_infowindow: false
	}
];

$(function() {
       new Maplace({
			locations: data,
			controls_type: 'list',
			controls_on_map: false
		}).Load();
    });