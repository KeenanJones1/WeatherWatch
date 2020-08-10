import React, { Component} from 'react'
import Login from './Login'
import Signup from "./Signup";
import {Grid, List, Drawer, ListItem, ListItemText, IconButton, DialogTitle, Dialog, Tabs, Tab} from '@material-ui/core'
import { Menu } from '@material-ui/icons'


export default class MenuButton extends Component {
  constructor(){
    super()
    this.state = { 
      dialogOpen: false,
      login: true,
      signup: false
    }
  }


handleOpen = () => {
  this.setState({
    dialogOpen: true
  })
  }

  handleClose = () => {
    this.setState({ dialogOpen: false})
    this.props.toggleDrawer()
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
    <Grid item xs={4} align="center">
      <IconButton onClick={() => this.props.toggleDrawer()}>
        <Menu className="button" id="menu-button" fontSize="large" />
      </IconButton>

      <Drawer open={this.props.drawerOpen} onClose={ () => this.props.toggleDrawer()} >
        <List>
          <ListItem button onClick={() => this.handleOpen()}>
            <ListItemText primary="Login/Signup" />
          </ListItem>
        </List>
      </Drawer>
      <Dialog open={this.state.dialogOpen} onClose={() => this.handleClose()}>
        <DialogTitle >
          <Tabs value="Login" onClick={ () => this.handleLogin()} id="login-tab" className="tabs">
            <Tab label="Login"/>
          </Tabs>
          <Tabs value="Signup" onClick={ () => this.handleSignup()} id="signup-tab" className="tabs">
            <Tab label="Signup"/>
          </Tabs>
        </DialogTitle>
      { this.state.login ? <Login handleClose={this.handleClose} /> : <Signup handleClose={this.handleClose}/>}
      </Dialog>
    </Grid>
  )}}




