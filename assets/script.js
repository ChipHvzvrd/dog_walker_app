// Google Maps API
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 32.7767, lng: -96.7970 },
    zoom: 11,
  });

  

}

window.initMap = initMap;

// Random Dog Image Generator API
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

// Sunrise Sunset API
const getData = () => {
    fetch ("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today")
    .then(data => data.json())
    .then((data) => console.log(data));
    // document.querySelector('#name').innerHTML = '<h1>'
    
};

getData();