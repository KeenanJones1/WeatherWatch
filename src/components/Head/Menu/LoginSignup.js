import React, { Component, Fragment } from 'react'
import Login from './Login'
import Signup from './Signup'
import { Dialog, AppBar, DialogTitle, Tabs, TabPanel, Tab, DialogContent, DialogContentText } from '@material-ui/core'

export default class LoginSignup extends Component {

 constructor(){
  super()
  this.state={
   login: true,
   signup: false,
  }
 }

 handleLogin = () => {
  this.setState(prevState => ({
   login: true,
   signup: false
  }))
 }

 handleSignup = () => {
  this.setState(prevState => ({
   login: false,
   signup: true
  }))
 }


 render() {
  return (
   <Fragment>
    <Dialog open={this.props.dialogOpen} onClose={() => this.props.handleClose()}>
     <DialogTitle>
      
       <Tabs value="Login" onClick={ () => this.handleLogin()}>
        <Tab label="Login" value="Login"/>
       </Tabs>

       <Tabs value="Signup" onClick={ () => this.handleSignup()}>
        <Tab label="Signup" value= "Signup"/>
       </Tabs>
     </DialogTitle>
     

    { this.state.login ? <Login handleClose={this.props.handleClose} /> : <Signup handleClose={this.props.handleClose}/>}



    
    </Dialog>
   </Fragment>
   
  )
 }
}
