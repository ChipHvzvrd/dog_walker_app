var button = document.querySelector('#subButton');
var inputValue = document.querySelector('#userInput');
var displaySunset = document.querySelector('#sunset');
var displaySunrise = document.querySelector('#sunrise');
var tester = document.querySelector('#tester');
var latitude = {"lat":""};
var longitude = {"lon":""};


 function geoLocation(){

    fetch('https://api.geocodify.com/v2/geoparse?api_key=bca99c614f2eaac28187bce7c2898fb13856ddea&text='+inputValue.value+'&pages=5')
    .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then(data => {
        console.log(data.response.results.places.focus.cities[0]);
      })
      .catch((error) => console.error("FETCH ERROR:", error))
     }

async function renderData(){

 await fetch('https://api.sunrise-sunset.org/json?lat='+latitude.value+'&lng='+longitude.value+'&date=today')
   .then((response) => {
     if (response.ok) {
       return response.json();
     } else {
       throw new Error("NETWORK RESPONSE ERROR");
     }
   })
   .then(data => {
     var sunsetData = data['results']['sunset'];
     var sunriseData = data['results']['sunrise'];
     displaySunset.innerHTML = 'The best time to walk your dog this evening will be at ' + sunsetData;
     displaySunrise.innerHTML = 'The best time to walk your dog this morning will be at ' + sunriseData;
   })
   .catch((error) => console.error("FETCH ERROR:", error));
 }
  

function storeData(){
    localStorage.setItem("{''}");
}



  button.addEventListener('click', () => {
    geoLocation(); 
    renderData();
  });