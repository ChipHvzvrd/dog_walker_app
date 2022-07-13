
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

// let sunriseSunset;

// fetch('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&callback=mycallback') {
//     .then(response => response.json())
//   .then(data => console.log(data));
// }
  
// fetch ("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=214556dfb689253a62f7c088b67992ee")

const dogBtn = document.querySelector('.dogBtn');
const dogImage = document.querySelector('.dogImage');
dogBtn.addEventListener('click',()=>{
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(result =>{
    return result.json();
  })
  .then(picture=>{
    dogImage.src = picture.message;
  });
});