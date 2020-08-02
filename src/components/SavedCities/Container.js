import React from 'react'
import Cities from './Cities'
import { Grid } from '@material-ui/core'

const Container = () => {
 return (
  <Grid className="saved-cities" id="saved-cities-container" xs={12} direction="row" justify="space-evenly">

   {/* Show either Cities or Weekly Temperatures depending if the login of the user  */}
   <Cities />
  </Grid>
 )
}

export default Container
