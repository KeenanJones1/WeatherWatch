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
   console.log("ADD_MAIN_CITY action", action.mainCity[0])
   const {mainCity} = action
   return {
    ...state, 
    mainWeather: {...state.mainWeather, cityName: mainCity[0].EnglishName, cityKey: mainCity[0].Key, country: mainCity[0].Country.ID},
    savedWeather: [...state.savedWeather],
    requesting: false
   }

   case 'ADD_MAIN_WEATHER':
    console.log("ADD_MAIN_WEATHER", action.data.DailyForecasts)
    // debugger
    return {
     ...state, mainWeather: { ...state.mainWeather, forcasts: action.data.DailyForecasts}
    }

  default: 
  return state;
 }
}