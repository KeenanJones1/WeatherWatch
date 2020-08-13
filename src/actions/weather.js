const openWeatherApi = {
 key: "be40f9cd8335ced68e24e6298417aa60",
 base: "https://api.openweathermap.org/data/2.5/"
}

const accuweatherApi = {
 key: "l9GtReToEMGnudzGV4g1eMANLYAGW9CW",
 citySearch: "http://dataservice.accuweather.com/locations/v1/cities/search"
}

let city = ""


export function fetchWeather(state){
 return (dispatch) => {
  dispatch({type: 'START_ADDING_WEATHER_REQUEST'})
  fetch(`${openWeatherApi.base}weather?q=${state.query}&units=imperial&APPID=${openWeatherApi.key}`)
  .then(resp => resp.json())
  .then(mainWeather => {
   dispatch({type:'ADD_MAIN_WEATHER' , mainWeather}) 
   console.log(mainWeather.name)
   city = mainWeather.name
  })
  .catch()
 };
}

export function fetchWeek(){
 return( dispatch ) => {
  dispatch({type: 'SET_WEEK_WEATHER'})
  fetch(``)
  .then(resp => resp.json())
  .then(data => console.log("week weather", data))
  .catch()
 };
}


// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}

