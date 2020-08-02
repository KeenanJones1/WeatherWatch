import React, { Component, Fragment } from 'react'
import SearchBar from './SearchBar'
import Signup from './Signup'
import Login from './Login'
import UserButton from './UserButton'
import { Grid, Typography} from '@material-ui/core'
import { Menu, AddCircleOutline } from '@material-ui/icons'

class Head extends Component{
 render(){
  return (
   <Grid className="head" id="head-container" container direction="row" justify="space-evenly" spacing={3}>

    <Grid item xs={4} align="center">
     <Menu className="button" id="menu-button"/>
    </Grid>

    <Grid item xs={4} align="center">
     <Typography variant="h5" >
      Weather Watch
     </Typography>
    </Grid>

    <Grid item xs={4} className="button" id="add-button" align="center">
     <AddCircleOutline fontSize="large"/>
    </Grid>
    
   </Grid>
  )
 }
}

export default Head
