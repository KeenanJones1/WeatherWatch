export function createUser(state){
 return (dispatch) => {
  let reqObj = {
  method:'POST' ,
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({user: {
   full_name: state.fullName,
   username: state.username,
   password: state.password}})}
  dispatch({type: 'START_CREATE_USER_REQUEST'});
  fetch(`http://localhost:3000/signup`, reqObj)
  .then(resp => resp.json())
  .then(token => {
   localStorage.setItem('token',token.token)})
  .catch()
 }}

export function fetchUser(state){
 return (dispatch) => {
  let reqObj = {
   method: 'POST',
  headers: { 'Content-Type': 'application/json'},
  body: JSON.stringify({username: state.username, password: state.password})
 }
  dispatch({type: 'START_GETTING_USER_INFO'});
  fetch(`http://localhost:3000/login`, reqObj)
  .then(resp => resp.json())
  .then(data => { 
   localStorage.setItem('token', data.token)
   fetchInfo(data.token, dispatch)})}}

export function fetchInfo(token, dispatch){
  return (dispatch) => {
    let reqObj = {
      method: 'GET',
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}}
   
       fetch('http://localhost:3000/myuser', reqObj)
       .then(resp => resp.json())
       .then(data => dispatch({type: 'SET_USER_INFO', data}))
       .catch(err => console.log(err))
  }
}