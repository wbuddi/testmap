let map;
// map options
function initMap() {
    var options = {
        zoom: 15,
        center: { lat: -34.928648, lng: 138.5978293 }

    }

    // new map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // new marker
    // var marker = new google.maps.Marker({
    //     position: { lat: -34.934128, lng: 138.602067 },
    //     map: map,
    //     icon: 'https://img.icons8.com/material-rounded/48/000000/home.png'

    // });

    // var infoWindow = new google.maps.InfoWindow({
    //     content: '<h1>Home</h1>'
    // });
    // marker.addListener('click', function() {
    //     infoWindow.open(map, marker);
    // });

    // Array or markers

    var markers = [{
            coords: { lat: -34.934128, lng: 138.602067 },
            iconImage: 'https://img.icons8.com/material-rounded/48/000000/home.png',
            content: '<h1>Home</h1>'
        },
        {
            coords: { lat: -34.931129, lng: 138.604889 },
            iconImage: 'https://img.icons8.com/ios-filled/50/4a90e2/restaurant-membership-card.png',
            content: '<div id=infoContent><div class="infoImg"></div><h3>Chaminar</h3></div>'
        },
        {
            coords: { lat: -34.9347334, lng: 138.5898541 },
            iconImage: 'https://img.icons8.com/ios-filled/50/4a90e2/restaurant-membership-card.png',
            content: '<h1>Willo & Co</h1>'
        },
        {
            coords: { lat: -34.929157, lng: 138.593695 },
            iconImage: 'https://img.icons8.com/ios-filled/50/4a90e2/restaurant-membership-card.png',
            content: '<h1>Avist Cafe</h1>'
        },
        {
            coords: { lat: -34.9271021, lng: 138.5987801 },
            iconImage: 'https://img.icons8.com/ios-filled/50/4a90e2/restaurant-membership-card.png',
            content: '<h1>3 Viets</h1>'
        },
        {
            coords: { lat: -34.9228097, lng: 138.5921937 },
            iconImage: 'https://img.icons8.com/ios-filled/50/4a90e2/restaurant-membership-card.png',
            content: '<h1>Sushi Planet</h1>'
        },
    ];

    // Loop through markers

    for (var i = 0; i < markers.length; i++) {
        // Add Marker
        addMarker(markers[i]);
    }



    //Add makers
    // addMarker({
    //     coords: { lat: -34.934128, lng: 138.602067 },
    //     iconImage: 'https://img.icons8.com/material-rounded/48/000000/home.png',
    //     content: '<h1>Home</h1>'
    // });
    // addMarker({ coords: { lat: -34.931129, lng: 138.604889 } });
    // addMarker({ coords: { lat: -34.9347334, lng: 138.5898541 } });
    // addMarker({ coords: { lat: -34.929157, lng: 138.593695 } });
    // addMarker({ coords: { lat: -34.9271021, lng: 138.5987801 } });
    // addMarker({ coords: { lat: -34.9228097, lng: 138.5921937 } });



    // Add Marker Function to add multiple markers
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            // icon: props.iconImage

        });
        // check for custom icon
        if (props.iconImage) {
            // set icon Image
            marker.setIcon(props.iconImage);
        }
        // check content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }

    }
}