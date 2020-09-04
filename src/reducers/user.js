export default function userReducer(state = { requesting: false, token: "" , login: false, cities:[], full_name: "", username: ""}, action){
 switch(action.type){

  case 'START_ADDING_USER_REQUEST':
  return{
   ...state, requesting: true
  }

  case 'SET_INFO': 
  console.log(action)
  return{
    ...state, cities: action.data.cities, full_name: action.data.full_name, username: action.data.username
  }

  case 'LOGIN': 
  return{...state, login: true}

  case 'ADD_USER':
   return {
    ...state, user: action.user, requesting: false
   }

   case 'SET_USER_INFO':
    return{
     ...state, full_name: action.data.full_name, username: action.data.username, cities: action.data.cities
    }

    case 'ADD_SAVED_WEATHER': 
    let cityIndex = state.cities.findIndex(city => city.key === action.cityKey) 
    
    state.cities[cityIndex].temp = action.data.DailyForecasts[0].Temperature
    return {...state} 
  
    case 'COMPLETE_USER_REQUEST':
      return{ ...state, requesting: 'done' }

    case 'LOGOUT': 
    return state = {requesting: false, login: false, cities:[], token: "", full_name: "", username: ""}

  default: 
  return state;
 }
}