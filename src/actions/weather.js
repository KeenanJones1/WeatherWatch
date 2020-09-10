require('dotenv').config();

const accuweatherApi = {
 base: "http://dataservice.accuweather.com/locations/v1/cities/search",
 forcast:"http://dataservice.accuweather.com/forecasts/v1/daily/5day/",
 day: "http://dataservice.accuweather.com/forecasts/v1/daily/1day/348308?apikey=5555"
}

export const fetchWeather = (state) => {
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

export const saveCity = (city) => {
  let token = localStorage.getItem('token')
  return (dispatch) => {
    let reqObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
      body: JSON.stringify({user_city:{name: city.cityName , country:city.country , key: city.cityKey}})
    }
    dispatch({type: 'ADD_USER_CITY', city})
    fetch(`http://localhost:3000/user_cities`, reqObj)
    .then(resp => resp.json())
    .then(data => alert(data))
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


export function fetchCityWeather(cityKey){
  return (dispatch) => {
    console.log(cityKey)
    dispatch({type: 'START_ADDING_USER_REQUEST'})
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}`) 
  .then(resp => resp.json())
  .then(data => 
    dispatch({type: 'ADD_SAVED_WEATHER', data, cityKey})
  )
    dispatch({type: 'COMPLETE_USER_REQUEST'})
  }
}



