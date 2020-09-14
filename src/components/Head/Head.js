import React, { Component, Fragment } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import MenuButton from './Menu/MenuButton'
import SearchButton from './SearchButton'
import { Grid, Typography, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@material-ui/core'

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
         Search name of City
        </DialogContentText>
        <TextField autoFocus id="city-search" label= "Search" />
       </DialogContent>
       <DialogActions>
        <Button onClick={ () => this.handleClose()}>
         Cancel
        </Button>
        <Button>
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
