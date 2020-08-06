import React from 'react'
import City from './City'
import { Grid } from '@material-ui/core'

// map over an array and produce City cards.

const Cities = () => {
 return (
  <Grid container item xs={12} sm={6}>
   
   <City />
  </Grid>
 )
}

export default Cities
