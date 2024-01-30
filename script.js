const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '184d163d3cmsh25cc7d001fcbc25p163b45jsnc46482b0045f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

cityName.innerHTML= city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city , options)
        .then(response => response.json())
        .then((response) => {


            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            // humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            // humidity.innerHTML = response.humidity
            wind_speed.innerHTML = response.wind_speed
            // wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees

        })

        .catch(err => console.error(err));
}

submit.addEventListener("click" , (e ) =>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Itarsi");


// Date object
var today = new Date();

// Current Date
  var date = (today.getMonth()+1)+' / '+today.getDate();

  document.getElementById("current_date").innerHTML = date;

// Current Time
//   var time = today.getHours() + ":" + today.getMinutes() ;
  
//   document.getElementById("current_time").innerHTML = time;

// Current Date and Time
  var dateTime = date;
  
  document.getElementById("current_dateandtime").innerHTML = dateTime;