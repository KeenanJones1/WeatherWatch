import React from 'react'
import Cities from './Cities'
import { Grid } from '@material-ui/core'

const Container = () => {
 return (
  <Grid id="save-cities-container" xs={12} direction="row" justify="space-evenly">
   <Cities />
  </Grid>
 )
}

export default Container
