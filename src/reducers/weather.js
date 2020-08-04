export function weatherReducer( state = { savedWeather: [], mainWeather: {}, requesting: false}, action){
 switch(action.type){
  case 'START_ADDING_WEATHER_REQUEST': 
  return{
   ...state, 
   savedWeather: [...state.savedWeather],
   mainWeather: {...state, mainWeather},
   requesting: true,
  }


  case 'ADD_MAIN_WEATHER':
   return {
    ...state, 
    mainWeather: action.mainWeather,
    savedWeather: [...state.savedWeather],
    requesting: false
   }


  default: 
  return state;
 }
}