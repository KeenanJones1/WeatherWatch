import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button, DialogActions, DialogContentText, DialogTitle, TextField, DialogContent } from '@material-ui/core'
import {fetchUser} from '../../../actions/user'

class Login extends Component {
 constructor(){
  super()
  this.state = {
   username: "",
   password: ""
  }
 }


 handleForm = (event) => {this.setState({[event.target.name]: event.target.value})}

 handleSubmit = () => {
  this.props.fetchUser(this.state)
  this.props.handleClose()
 }




 render() {
  return (
 <Fragment>
  <DialogTitle align='center'>Login</DialogTitle>
  <DialogContent align='center'>
   <DialogContentText>Welcome Back, please login</DialogContentText>
   <TextField onChange={this.handleForm} label="Username" autoFocus name="username" value={this.state.username} /> <br/>
   <TextField type="password" onChange={this.handleForm} label="Password" autoFocus name="password" value={this.state.password} />
  </DialogContent>
  <DialogActions>
   <Button onClick= {() => this.handleSubmit()}>Login</Button>
   <Button onClick= {() => this.props.handleClose()}>Cancel</Button>
  </DialogActions>
 </Fragment>
  )
 }
}

export default connect(null, {fetchUser})(Login)
