export default function weatherReducer( state = { savedWeather: [], mainWeather: {city: "", country: "", weather: "", description: "", temp: {}}, requesting: false}, action){
 switch(action.type){
  case 'START_ADDING_WEATHER_REQUEST': 
  return{
   ...state, 
   savedWeather: [...state.savedWeather],
   mainWeather: {...state.mainWeather},
   requesting: true,
  }


  case 'ADD_MAIN_WEATHER':
   console.log(action)
   const {mainWeather} = action
   return {
    ...state, 
    mainWeather: {...state.mainWeather, city: mainWeather.name, country: mainWeather.sys.country, weather: mainWeather.weather[0].main, description: mainWeather.weather[0].description, temp: mainWeather.main},
    savedWeather: [...state.savedWeather],
    requesting: false
   }


  default: 
  return state;
 }
}