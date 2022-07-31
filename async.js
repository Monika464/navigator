let lon = 00;
let lat = 00;

const form = document.getElementById('form');

form.addEventListener("submit", reading);

function reading (event){
event.preventDefault();
let ulica1 = document.getElementById('streetform').value;
let miasto1 = document.getElementById('cityform').value;
let kraj1 = document.getElementById('coutryform').value;
let kod ="";
console.log(ulica1,miasto1,kraj1);

const myApiKey = "657549239094149820675x15906";
const geolocation = `https://geocode.xyz/${ulica1}+${miasto1}+${kraj1}+${kod}?json=1&auth=${myApiKey}`

    fetch(geolocation)
      .then((res) => res.json())
       .then((data) => {
       console.log(data);
        document.getElementById('lat').innerHTML = data.latt;
        document.getElementById('long').innerHTML = data.longt;
        document.getElementById('street').innerHTML = data.standard.addresst;
        document.getElementById('city').innerHTML = data.standard.city;
        document.getElementById('country').innerHTML = data.standard.countryname;
         })
      //.then((data) => {return lat = data.latt })
      //.then((data) => {return lon = data.longt})
       
         
       .catch((err) => console.log(err));
       
console.log(lat,lon);
}


function makeRequest(location){

return  new Promise((resolve, reject) => {
   
       //document.getElementById("demo").innerHTML = `<img src= ${resolve}/>`;
   resolve(`<img src= ${location}/>`)
  })
   
} 


//let lon = 20.03;
//let lat = 50.07;


let newMap = `http://www.7timer.info/bin/astro.php?lon=${lon}&lat=${lat}&ac=0&lang=en&unit=metric&output=internal&tzshift=0`;
makeRequest(newMap)
.then(resolve => { return document.getElementById("demo").innerHTML = resolve})
.catch(err => {
      console.log(err);
  })
.then(resolve =>{return (console.log(resolve))});
  
  
