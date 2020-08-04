export default function userReducer(state = { request: false, }, action){
 switch(action.type){

  case 'START_ADDING_USER_REQUEST':
  return{
   ...state, requesting: true
  }

  case 'ADD_USER':
   return {
    ...state, user: action.user, requesting: false
   }

  default: 
  return state;
 }
}