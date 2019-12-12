
function onload(){
    var mymap = L.map('mapid').setView([48.151944, 17.072754], 16);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmxha2FlbSIsImEiOiJjazNzazZtYzEwN2FyM2VtbnVnMnlqenVlIn0.Gttfqn6JXQpDRwRYyGsf5Q', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken: 'pk.eyJ1IjoiYmxha2FlbSIsImEiOiJjazNzazZtYzEwN2FyM2VtbnVnMnlqenVlIn0.Gttfqn6JXQpDRwRYyGsf5Q'
    }).addTo(mymap);

    L.polygon([
        [48.151965, 17.07255],
        [48.151965, 17.073864],
        [48.151811, 17.073864],
        [48.151811, 17.07255]
    ]).addTo(mymap).bindPopup("<b> FEI STU blok A</b> <br /> Ustavy : <br />Ústav jadrového a fyzikálneho inžinierstva <br />Ústav informatiky a matematiky");

    //blok B
    L.polygon([
        [48.152473, 17.073011],
        [48.152473, 17.074347],
        [48.152323, 17.074347],
        [48.152323, 17.073011]
    ]).addTo(mymap).bindPopup("<b> FEI STU blok B</b> <br /> Ustavy : <br />Ústav telekomunikácií <br /> Ústav elektrotechniky");

    //blok C
    L.polygon([
        [48.152963, 17.07255],
        [48.152963, 17.073864],
        [48.152835, 17.073864],
        [48.152835, 17.07255]
    ]).addTo(mymap).bindPopup("<b> FEI STU blok C</b> <br /> Ustavy : <br />Ústav informatiky a matematiky");

    //blok D
    L.polygon([
        [48.153486, 17.073199],
        [48.153486, 17.074347],
        [48.153339, 17.074347],
        [48.153339, 17.073199]
    ]).addTo(mymap).bindPopup("<b> FEI STU blok D</b> <br /> Ustavy : <br />Ústav  automobilovej <br /Mechatroniky Ústav robotiky a kybernetiky");

    //blok E
    L.polygon([
        [48.153968, 17.07256],
        [48.153968, 17.073870],
        [48.153844, 17.073870],
        [48.153844, 17.07256]
    ]).addTo(mymap).bindPopup("<b> FEI STU blok E</b> <br /> Ustavy : <br />Ústav elektroniky a fotoniky");
    //L.marker([48.154134, 17.075028]).addTo(mymap).bindPopup("<b>Zastavka Zoo</b><br /> Linky c. : 39,31");
    
    //autobus icon
    var busIcon = L.icon({
        iconUrl: 'autobus.png',
        iconSize:     [13, 16], // size of the icon
        //shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
        //shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
    });
    //elektricka icon
    var tramIcon = L.icon({
        iconUrl: 'tram.png',
        iconSize:     [13, 20], // size of the icon
        //shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
        //shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
    });   
    L.marker([48.154169, 17.075028], {icon: busIcon}).addTo(mymap).bindPopup("<b>Zastavka Zoo</b><br /> Linky c. : 39,31");
    L.marker([48.15817, 17.068248],{icon: busIcon}).addTo(mymap).bindPopup("<b>Cintorin Slavicie Udolie</b><br /> Linky c. : 39,31,139");
    L.marker([48.156718, 17.070941],{icon: busIcon}).addTo(mymap).bindPopup("<b>Televizna</b><br /> Linky c. : 39,31");
    L.marker([48.145190, 17.078130],{icon: tramIcon}).addTo(mymap).bindPopup("<b>Lafranconi</b><br /> Linky c. : 4,9");
    L.marker([48.148137, 17.072115],{icon: tramIcon}).addTo(mymap).bindPopup("<b>Botanicka</b><br /> Linky c. : 4,9");
    L.marker([48.153941, 17.076906],{icon: busIcon}).addTo(mymap).bindPopup("<b>ZOO</b><br /> Linky c. : 30,32,37");
    L.marker([48.168597, 17.077142],{icon: busIcon}).addTo(mymap).bindPopup("<b>Patronka</b><br /> Linky c. : 83,84,21,212");
    L.marker([48.163545, 17.076439],{icon: busIcon}).addTo(mymap).bindPopup("<b>Pri Habanskom Mlyne</b><br /> Linky c. : 30,32,37,192");
    L.marker([48.149334, 17.063189],{icon: tramIcon}).addTo(mymap).bindPopup("<b>Molecova</b><br /> Linky c. : 4,9");
    L.marker([48.15009, 17.062433],{icon: busIcon}).addTo(mymap).bindPopup("<b>Molecova</b><br /> Linky c. : 33,32");
    L.marker([48.150963, 17.066242],{icon: busIcon}).addTo(mymap).bindPopup("<b>Panorama</b><br /> Linky c. : 139");
    

    
    
    
    //LAYERS
	var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmxha2FlbSIsImEiOiJjazNzazZtYzEwN2FyM2VtbnVnMnlqenVlIn0.Gttfqn6JXQpDRwRYyGsf5Q';

	var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', attribution: mbAttr}),
		streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11',   attribution: mbAttr});

	var baseLayers = {
		"Grayscale": grayscale,
		"Streets": streets
	};
    L.control.layers(baseLayers).addTo(mymap);


    L.Routing.control({
        waypoints: [
            L.latLng(48.151965, 17.07255),
            L.latLng(48.151965, 17.07255)
        ],
        routeWhileDragging: true
    }).addTo(mymap);


}