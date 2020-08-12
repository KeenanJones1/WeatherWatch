import React, { Component, Fragment } from 'react'
import { TextField, Button, IconButton, Dialog, DialogContent, DialogActions, DialogTitle} from "@material-ui/core";
import {AddCircleOutline} from "@material-ui/icons"

// Redux
import {connect} from 'react-redux'
import {fetchWeather} from '../../actions/weather'



class SearchButton extends Component {
 constructor(){
  super()
  this.state = {
    open : false,
    query: "",
  }
 }

 handleOpen = () => {
  this.setState({open: true})
 }

 handleClose = () => {
  this.setState({open: false})
 }
 
 handleSearch = (event) => {
  this.setState({query: event.target.value})
 }

 handleSubmit = () => {
  this.props.fetchWeather(this.state)
  this.setState({query: ""})
  this.handleClose()
 }

 handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    this.props.fetchWeather(this.state)
    this.handleClose()
    this.setState({query: ""})
  }
 } 

 render() {
  return (
    <Fragment >
      <IconButton onClick={() => this.handleOpen()}>
        <AddCircleOutline fontSize="large"/>
      </IconButton>


      <Dialog open={this.state.open}>
        <DialogTitle>Search Weather</DialogTitle>

        
        <DialogContent>
          <TextField label="Zip or City's name" onChange={(event) => this.handleSearch(event)} 
          onKeyPress = {(event) => this.handleKeyPress(event)} value={this.state.query}/>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => this.handleSubmit()}>Submit</Button>
          <Button onClick={() => this.handleClose()}>Cancel</Button>
        </DialogActions>

      </Dialog>
    </Fragment>
  )
 }
}

export default connect(null, {fetchWeather})(SearchButton)