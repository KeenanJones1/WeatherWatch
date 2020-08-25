require('dotenv').config();

const accuweatherApi = {
 base: "http://dataservice.accuweather.com/locations/v1/cities/search",
 forcast:"http://dataservice.accuweather.com/forecasts/v1/daily/5day/"
}

console.log(process.env)



export function fetchWeather(state){

 return (dispatch) => {
  dispatch({type: 'START_ADDING_WEATHER_REQUEST'})
  fetch(`${accuweatherApi.base}?apikey=${process.env.REACT_APP_API_KEY}&q=${state.query}&language=en-us&details=false`)
  .then(resp => resp.json())
  .then(mainCity => 
   { dispatch({type:'ADD_MAIN_CITY' , mainCity}) 
     getCityWeather(mainCity, dispatch)
  })
  .catch((r) => console.log(r))
 };
}



// Add city to store
// store the city info somewhere
export function saveCity(city){
  return (dispatch) => {
    dispatch({type: 'ADD_USER_CITY', city})
    fetch(``)
    .then(resp => resp.json())
    .then(data => console.log(data))
  }
}


const getCityWeather = (mainCity, dispatch) => {
 if(mainCity[0].ParentCity){
  return fetch(`${accuweatherApi.forcast}${mainCity[0].ParentCity.Key}?apikey=${process.env.REACT_APP_API_KEY}&language=en-us&details=false&metric=false`)
  .then(resp => resp.json())
  .then(data => dispatch({type: 'ADD_MAIN_WEATHER', data}))
  .catch()
 }
 else{
  return fetch(`${accuweatherApi.forcast}${mainCity[0].Key}?apikey=${process.env.REACT_APP_API_KEY}&language=en-us&details=false&metric=false`)
  .then(resp => resp.json())
  .then(data => dispatch({type: 'ADD_MAIN_WEATHER', data}))
  .catch()
 }
}






