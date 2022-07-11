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