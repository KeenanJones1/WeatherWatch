import React, { Component } from 'react'
import { TextField, Button, Grid} from "@material-ui/core";


export default class SearchBar extends Component {
 constructor(){
  super()
  this.state = {

  }
 }
 
 render() {
  return (
    <Grid className="search-bar">
      <input type="text" name="" id="search-bar"/>
     {/* <TextField variant="outlined"
     id="search-bar" label="City Search" />
      <Button /> */}
      <Button id="search-button" large>
        Submit
      </Button>


    </Grid>
  )
 }
}
