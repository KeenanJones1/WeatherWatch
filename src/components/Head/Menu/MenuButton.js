import React, { Component, Fragment} from 'react'
import {Grid, List, Drawer, ListItem, ListItemText, IconButton} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import LoginSignup from './LoginSignup'


export default class MenuButton extends Component {
  constructor(){
    super()
    this.state = { dialogOpen: false }
  }


handleOpen = () => {
  this.setState({
    dialogOpen: true
  })
  console.log(this.state)
  }

  handleClose = () => {

    this.setState({
      dialogOpen: false
    })

  console.log(this.state)
  }

render() {
  return (
    <Grid item xs={4} align="center">
      <Fragment>
      <IconButton onClick={() => this.props.toggleDrawer()}>
        <Menu className="button" id="menu-button" fontSize="large" />
      </IconButton>
      <Drawer open={this.props.drawerOpen} onClose={ () => this.props.toggleDrawer()} >
        <List>
        <ListItem button onClick={() => this.handleOpen()}>
          <LoginSignup dialogOpen={this.state.dialogOpen} handleClose={this.handleClose} />
          <ListItemText primary="Login/Signup" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About"/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact"/>
        </ListItem>
        </List>
      </Drawer>
      </Fragment>
    </Grid>
  )}}



