export default function weatherReducer( state = { savedWeather: [], mainWeather: {cityName: "", country: "", weather: "", cityKey: "", forcasts:[],  temp: {}}, requesting: false}, action){
 switch(action.type){
  case 'START_ADDING_WEATHER_REQUEST': 
  return{
   ...state, 
   savedWeather: [...state.savedWeather],
   mainWeather: {...state.mainWeather},
   requesting: true,
  }


  case 'ADD_MAIN_CITY':
   const {mainCity} = action
   return {
    ...state, 
    mainWeather: {...state.mainWeather, cityName: mainCity[0].EnglishName, cityKey: mainCity[0].Key, country: mainCity[0].Country.ID,},
    savedWeather: [...state.savedWeather],
    requesting: false
   }

   case 'ADD_MAIN_WEATHER':
    return {
     ...state, mainWeather: { ...state.mainWeather, forcasts: action.data.DailyForecasts, temp: action.data.DailyForecasts[0].Temperature.Maximum, weather: action.data.DailyForecasts[0].Day.IconPhrase}
    }

  default: 
  return state;
 }
}