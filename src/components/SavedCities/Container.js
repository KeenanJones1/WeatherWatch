import React from 'react'
import Cities from './Cities'
import { Grid } from '@material-ui/core'

const Container = () => {
 return (
  <Grid container item >

   {/* Show either Cities or Weekly Temperatures depending if the login of the user  */}
   <Cities />
  </Grid>
 )
}

export default Container
