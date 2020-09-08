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
   localStorage.setItem('token', data.token)
  })
  .catch()
 }}


export function fetchUser(state){
  return (dispatch) => {
    let reqObj = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: state.username, password: state.password})}
      dispatch({type:'START_ADDING_USER_REQUEST' });
    fetch(`http://localhost:3000/login`, reqObj)
    .then(resp => resp.json())
    .then(data => {
      if(data.token !== "underfined"){      localStorage.setItem('token', data.token)
      dispatch({type:'SET_USER_INFO', data})
      dispatch({type: 'LOGIN'})
    }
      })
   }
  }
  

  export function fetchInfo(token){
    return (dispatch) => {
    dispatch({type:'START_ADDING_USER_REQUEST' })
    let reqObj = {
      method: 'GET',
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}}
      fetch('http://localhost:3000/myuser', reqObj)
      .then(resp => resp.json())
      .then(data => {
        !data.message ? dispatch({type:'SET_USER_INFO', data}) : alert(data.message)  })
      .catch(err => console.log(err))
    }}

export function logoutUser(){
  localStorage.removeItem('token')
  return (dispatch) => dispatch({type:'LOGOUT'})
}

export function removeCity(cityId, cityKey){
  let token = localStorage.getItem('token')
  return (dispatch) => {
    dispatch({type: 'START_ADDING_USER_REQUEST'})
    let reqObj = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
      body: JSON.stringify({citykey: cityKey, cityId: cityId})}
      fetch('http://localhost:3000/delete_city', reqObj)
      .then(resp => resp.json())
      .then(data => {dispatch({type:'SET_USER_INFO', data})})
      .catch(err => console.log(err))
    }
  }
