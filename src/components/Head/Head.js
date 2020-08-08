import React, { Component, Fragment } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import MenuButton from './Menu/MenuButton'
import SearchBar from './SearchButton'
import Signup from './Menu/Signup'
import Login from './Menu/Login.js'
import SearchButton from './SearchButton'
import { Grid, Typography, IconButton, Drawer, List, ListItem, ListItemText, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@material-ui/core'
import { Menu, AddCircleOutline, PersonOutlined, MailOutlined, LockOutlined } from '@material-ui/icons'

class Head extends Component{
 constructor(){
  super()
  this.state={
   drawerOpen: false,
   loginDialogOpen: false,
   dialogOpen: false,
   left: false,
  }
 }

  toggleDrawer = () => {
   this.setState(prevState => ({ drawerOpen: !prevState.drawerOpen}))
  }

  

  handleDialog = () => {
   this.setState(prevState => ({ loginDialogOpen: !prevState.loginDialogOpen}))
  }

 

 render(){
  return (
   <Grid className="head" id="head-container" container direction="row" justify="space-evenly" spacing={3}>
    <MenuButton toggleDrawer={this.toggleDrawer} drawerOpen={this.state.drawerOpen} />
   

    <Grid item xs={4} align="center">
     <Typography variant="h5" fontSize="large">
      Weather Watch
     </Typography>
    </Grid>

    <Grid item xs={4} className="button" id="add-button" align="center">

     <Fragment>
      <SearchButton />
     </Fragment>

      <Dialog open={this.state.dialogOpen} onClose={() => this.handleClose()}>
       <DialogTitle>Search Weather</DialogTitle>
       <DialogContent>
        <DialogContentText>
         Search either zip code or name of City
        </DialogContentText>
        <TextField autoFocus id="city-search" label= "Search" />
       </DialogContent>
       <DialogActions>
        <Button onClick={ () => this.handleClose()}>
         Cancel
        </Button>
        <Button>
         {/* fetch */}
         Search
        </Button>
       </DialogActions>
      </Dialog>
    </Grid>  
   </Grid>
  )
 }
}

export default Head
