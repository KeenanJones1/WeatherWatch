const api = {
 key: "be40f9cd8335ced68e24e6298417aa60",
 base: "https://api.openweathermap.org/data/2.5/"
}


export function fetchWeather(state){
 return (dispatch) => {
  dispatch({type: 'START_ADDING_WEATHER_REQUEST'})
  fetch(`${api.base}weather?q=${state.query}&units=imperial&APPID=${api.key}`)
  .then(resp => resp.json())
  .then(mainWeather => {dispatch({type:'ADD_MAIN_WEATHER' , mainWeather})})
  .catch()
 };
}

export function fetchWeek(state){
 return{ type: 'this'}
 // ( dispatch ) => {
 //  dispatch({})
 //  fetch(`api.openweathermap.org/data/2.5/forecast?q=${state.cityname}&appid=${api.key}`)
 //  .then()
 //  .then()
 //  .catch()
 // };
}


// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}

