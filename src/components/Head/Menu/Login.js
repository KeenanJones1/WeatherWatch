import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button, Dialog, DialogActions, DialogContentText, DialogTitle, TextField, DialogContent } from '@material-ui/core'

class Login extends Component {




 render() {
  return (
 <Fragment>
  <DialogTitle>Login</DialogTitle>
  <DialogContent>
   <DialogContentText>Welcome Back, please login</DialogContentText>
   <TextField label="Email" autoFocus /> <br/>
   <TextField label="Password" autoFocus />
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
