export function fetchUser(){
 let reqObj
 return (dispatch) => {
  dispatch({type: 'START_ADDING_USER_REQUEST'});
  fetch('http://localhost:3000/auth', reqObj)
  .then()
  .then()
  .catch()
 };
}

export function createUser(state){
 console.log(state)
 return (dispatch) => {
  let reqObj = {
  method:'POST' ,
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({user : {
   full_name: state.fullName,
   username: state.username,
   password: state.password}})
  }

  dispatch({type: 'START_CREATE_USER_REQUEST'});
  fetch(`http://localhost:3000/signup`, reqObj)
  .then(resp => resp.json())
  .then(data => console.log(data))
  .catch()
 }
}