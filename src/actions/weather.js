
const accuweatherApi = {
 key: "l9GtReToEMGnudzGV4g1eMANLYAGW9CW",
 base: "http://dataservice.accuweather.com/locations/v1/cities/search",
 forcast: "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"
}




export function fetchWeather(state){
 return (dispatch) => {
  dispatch({type: 'START_ADDING_WEATHER_REQUEST'})
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
 }
 else{
  return fetch(`${accuweatherApi.forcast}${mainCity[0].Key}?apikey=${accuweatherApi.key}&language=en-us&details=false&metric=false`)
  .then(resp => resp.json())
  .then(data => dispatch({type: 'ADD_MAIN_WEATHER', data}))
  .catch()
 }
}




