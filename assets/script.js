// function initGoogle() {
//     var location = {
//         lat: 32.7767,
//         lng: -96.7970
//     }
//     var options = {
//         center: location,
//         zoom: 8
//     }
//     map = new google.maps.Map(document.getElementById("map"), options);
// }

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 32.7767, lng: -96.7970 },
    zoom: 11,
  });

  

}

window.initMap = initMap;

// if (navigator.geolocation) {
//     console.log('geolocation is here!');

//     navigator.geolocation.getCurrentPosition((loc) => {
//         location.lat = loc.coords.latitude;
//         location.lng = loc.coords.longitude;

//         //Write the map
//         map = new google.maps.Map(document.getElementById("map"), options);
//     })
// } else {
//     console.log('geolocation not supported');
//     map = new google.maps.Map(document.getElementById("map"), options);
// }

// autocomplete = new google.maps.places.Autocomplete(document.getElementById("input"),  
// {
//     componentRestrictions: {'country' : ['us']}, 
//     fields: ['geometry', 'name'],
//     types: ['city']
// })

// autocomplete.addListener("place_changed")