var city = document.querySelector('#city')
var myCity = document.querySelector('#myCity')
var temp = document.querySelector('#temp')
var desc = document.querySelector('#desc')
var box = document.querySelector('.tempBox')

const loader = document.querySelector("#loading");

// showing loading
function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000);
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
}


var myId = '006eee17b0b83d4de4dfca972d666b87'

function getCityInfo(){
  var a = city.value
  getData(a)

}

function getData(newCity){
  displayLoading()
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${myId}&units=metric`)
   .then(function(res){
       return res.json() 
})  
   .then(function(data){
      myCity.textContent = data.name
      temp.textContent = data.main.temp
      weather.textContent = data.weather[0].description
      wind.textContent = data.wind.speed
      sunrise.textContent = data.sys.sunrise
      box.style.display = 'block'
      hideLoading()
})
    .catch(function(err){
        console.log(err)
    })}

