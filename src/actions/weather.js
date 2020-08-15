const openWeatherApi = {
 key: "be40f9cd8335ced68e24e6298417aa60",
 base: "https://api.openweathermap.org/data/2.5/"
}

const accuweatherApi = {
 key: "l9GtReToEMGnudzGV4g1eMANLYAGW9CW",
 base: "http://dataservice.accuweather.com/locations/v1/cities/search",
 forcast: "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"
 //  /locations/v1/cities/search?apikey=l9GtReToEMGnudzGV4g1eMANLYAGW9CW&q=Chicago&language=en-us&details=false
}




export function fetchWeather(state){
 return (dispatch) => {
  dispatch({type: 'START_ADDING_WEATHER_REQUEST'})
  let keyFetch =
  fetch(`${accuweatherApi.base}?apikey=${accuweatherApi.key}&q=${state.query}&language=en-us&details=false`)
  .then(resp => resp.json())
  .then(mainCity => 
   { dispatch({type:'ADD_MAIN_CITY' , mainCity}) 
     getCityWeather(mainCity, dispatch)
  })
  .catch((r) => console.log(r))
 };
}


const getCityWeather = (mainCity, dispatch) => {
 if(mainCity[0].ParentCity){
  return fetch(`${accuweatherApi.forcast}${mainCity[0].ParentCity.Key}?apikey=${accuweatherApi.key}&language=en-us&details=false&metric=false`)
  .then(resp => resp.json())
  .then(data => dispatch({type: 'ADD_MAIN_WEATHER', data}))
  .catch()
  console.log("ParentCity Key", mainCity[0].ParentCity.Key)
 }
 else{
  return fetch(`${accuweatherApi.forcast}${mainCity[0].Key}?apikey=${accuweatherApi.key}&language=en-us&details=false&metric=false`)
  .then(resp => resp.json())
  .then(data => dispatch({type: 'ADD_MAIN_WEATHER', data}))
  .catch
  console.log("Not ParentCity Key", mainCity[0].Key)
 }
}

export function fetchWeek(state){
 return( dispatch ) => {
  dispatch({type: 'SET_WEEK_WEATHER'})
  fetch(``)
  .then(resp => resp.json())
  .then(data => console.log("week weather", data))
  .catch()
 };
}


// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}

