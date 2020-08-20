import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button, DialogActions, DialogContentText, DialogTitle, TextField, DialogContent } from '@material-ui/core'

class Login extends Component {
 constructor(){
  super()
  this.state = {
   email: "",
   password: ""
  }
 }


 handleForm = (event) => {this.setState({[event.target.name]: event.target.value})}





 render() {
  return (
 <Fragment>
  <DialogTitle align='center'>Login</DialogTitle>
  <DialogContent align='center'>
   <DialogContentText>Welcome Back, please login</DialogContentText>
   <TextField onChange={this.handleForm} label="Email" autoFocus name="email" value={this.state.email} /> <br/>
   <TextField type="password" onChange={this.handleForm} label="Password" autoFocus name="password" value={this.state.password} />
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
