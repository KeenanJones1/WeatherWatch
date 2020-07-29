import React, { Component, Fragment } from 'react'
import SearchBar from './SearchBar'
import Signup from './Signup'
import Login from './Login'
import UserButton from './UserButton'

class Head extends Component{
 

 render(){
  return (
   <div className="head">
    <Fragment>
     <UserButton/>
    </Fragment>

    <SearchBar />
    <Signup />
    <Login />
   </div>
  )
 }
}

export default Head
