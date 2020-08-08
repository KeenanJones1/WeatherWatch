const api = {
 key: "be40f9cd8335ced68e24e6298417aa60",
 base: "https://api.openweathermap.org/data/2.5/"
}


export function fetchWeather(state){
 let reqObj = { method: 'POST', headers: { 'Content-type': 'application/json'}, body: JSON.stringify(state)}
 console.log(state.query)
 return (dispatch) => {
  dispatch({type: 'START_ADDING_WEATHER_REQUEST'})
  fetch(`${api.base}weather?q=${state.query}&units=imperial&APPID=${api.key}`)
  .then(resp => resp.json())
  .then(mainWeather => {dispatch({type:'ADD_MAIN_WEATHER' , mainWeather})})
  .catch()
 };
}

