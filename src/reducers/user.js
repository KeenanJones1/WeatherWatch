export default function userReducer(state = { request: false, login: false, cities:[], full_name: "", username: ""}, action){
 switch(action.type){

  case 'START_ADDING_USER_REQUEST':
  return{
   ...state, requesting: true
  }

  case 'ADD_USER':
   return {
    ...state, user: action.user, requesting: false
   }

   case 'SET_USER_INFO':
    return{
     ...state, full_name: action.data.full_name, username: action.data.username, cities: action.data.cities, login: true
    }

  default: 
  return state;
 }
}