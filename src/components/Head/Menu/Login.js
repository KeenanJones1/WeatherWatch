import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button, Dialog, DialogActions, DialogContentText, DialogTitle, TextField, DialogContent } from '@material-ui/core'

class Login extends Component {
 constructor(){
  super()
  this.state={
   email: "",
   password: ""
  }
 }


 handleForm = (event) => {

  this.setState({
   [event.target.name]: event.target.value
  })
 }





 render() {
  return (
 <Fragment>
  <DialogTitle>Login</DialogTitle>
  <DialogContent>
   <DialogContentText>Welcome Back, please login</DialogContentText>
   <TextField onChange={this.handleForm} label="Email" autoFocus name="email"/> <br/>
   <TextField onChange={this.handleForm} label="Password" autoFocus name="password" />
  </DialogContent>
  <DialogActions>
   <Button>Login</Button>
   <Button onClick= {() => this.props.handleClose()}>Cancel</Button>
  </DialogActions>
 </Fragment>
  )
 }
}

export default connect()(Login)
