import React, { Component, Fragment } from 'react'
import SearchBar from './SearchBar'
import Signup from './Signup'
import Login from './Login'
import UserButton from './UserButton'
import { Grid, Typography, IconButton, Drawer, List, ListItem, ListItemText, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@material-ui/core'
import { Menu, AddCircleOutline } from '@material-ui/icons'

class Head extends Component{
 constructor(){
  super()
  this.state={
   drawerOpen: false,
   dialogOpen: false,
   left: false,
  }
 }

  toggleDrawer = () => {
   this.setState(prevState => ({ drawerOpen: !prevState.drawerOpen}))
  }

  handleForm = () => {
   this.setState({
    dialogOpen: true
   })
  }

  handleClose = () => {
   this.setState({
    dialogOpen: false
   })
  }

 render(){
  return (
   <Grid className="head" id="head-container" container direction="row" justify="space-evenly" spacing={3}>

    <Grid item xs={4} align="center">
     <Fragment>
      <IconButton onClick = {() => {this.toggleDrawer()}}>
       <Menu className="button" id="menu-button" fontSize="large"
       />
      </IconButton>
      <Drawer open={this.state.drawerOpen} onClose={ () => this.toggleDrawer()}>
       <List>
        <ListItem button>
         <ListItemText primary="Login/Signup"/>
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

    <Grid item xs={4} align="center">
     <Typography variant="h5" fontSize="large">
      Weather Watch
     </Typography>
    </Grid>

    <Grid item xs={4} className="button" id="add-button" align="center">
     <Fragment>
      <IconButton onClick={() => this.handleForm()}>
       <AddCircleOutline fontSize="large"/>
      </IconButton>

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
     </Fragment>
    </Grid>  
   </Grid>
  )
 }
}

export default Head
