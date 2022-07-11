function initGoogle() {
    var location = {
        lat: 32.7767,
        lng: -96.7970
    }
    var options = {
        center: location,
        zoom: 8
    }
    map = new google.maps.Map(document.getElementById("map"), options);
}