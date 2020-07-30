import React, { Component } from 'react'
import { TextField, Button} from "@material-ui/core";


export default class SearchBar extends Component {
 constructor(){
  super()
  this.state = {

  }
 }
 
 render() {
  return (
    <form className="search-bar">
     <TextField variant="outlined"
     id="search-bar" label="City Search" />
      <Button />
    </form>
  )
 }
}
