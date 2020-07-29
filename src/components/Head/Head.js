import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Signup from './Signup'
import Login from './Login'


class Head extends Component{
 render(){
  return (
   <div>
    <SearchBar />
    <Signup />
    <Login />
   </div>
  )
 }
}

export default Head
