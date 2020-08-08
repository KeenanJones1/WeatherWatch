export function fetchUser(){
 return (dispatch) => {
  dispatch({type: 'START_ADDING_USER_REQUEST'});
  fetch('http://localhost:3000/auth', reqObj)
  .then()
  .then()
  .catch()
 };
}