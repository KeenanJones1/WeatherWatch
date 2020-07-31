import React, { Component, Fragment } from 'react'
import SearchBar from './SearchBar'
import Signup from './Signup'
import Login from './Login'
import UserButton from './UserButton'
import { Grid } from '@material-ui/core'
class Head extends Component{
 

 render(){
  return (
   <Grid className="head" id="head-container" container direction="row">
    <Grid item >
     <SearchBar />
    </Grid>

    <Grid item>
     <Login/>
    </Grid>

    <Grid item>
     {/* <AddButton/> */}
    </Grid>

    {/* <Fragment>
     <UserButton/>
    </Fragment>

    <SearchBar />
    <Signup />
    <Login /> */}
   </Grid>
  )
 }
}

export default Head
