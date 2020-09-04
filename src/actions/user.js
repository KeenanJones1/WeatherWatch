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
  .then(data => {
    console.log(data)
  //  localStorage.setItem('token', token.token)
  })
  .catch()
 }}

 let fetchUserInfo = (token) => {
   return(dispatch) => {
    dispatch({type:'START_ADDING_USER_REQUEST' })
      let reqObj = {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}}
        fetch('http://localhost:3000/myuser', reqObj)
        .then(resp => resp.json())
        .then(data => dispatch({type:'SET_USER_INFO', data}))
        .catch(err => console.log(err))
      dispatch({type:'COMPLETE_USER_REQUEST'})
   }
 }


export function fetchUser(state){
  return (dispatch) => {
    let reqObj = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: state.username, password: state.password})}
      dispatch({type:'START_ADDING_USER_REQUEST' });
    fetch(`http://localhost:3000/login`, reqObj)
    .then(resp => resp.json())
    .then(data => dispatch({type:'SET_INFO', data}))
    dispatch({type: 'LOGIN'})}
  }
  

  export function fetchInfo(token){
    localStorage.setItem('token', token)
    console.log(token)
    return (dispatch) => {
    dispatch({type:'START_ADDING_USER_REQUEST' })
    let reqObj = {
      method: 'GET',
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}}
      fetch('http://localhost:3000/myuser', reqObj)
      .then(resp => resp.json())
      .then(data => dispatch({type:'SET_USER_INFO', data}))
      .catch(err => console.log(err))
    dispatch({type:'COMPLETE_USER_REQUEST'})}}

export function logoutUser(){
  localStorage.removeItem('token')
  return (dispatch) => dispatch({type:'LOGOUT'})
}