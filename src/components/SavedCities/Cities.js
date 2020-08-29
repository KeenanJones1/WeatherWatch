import React from 'react'
import {connect} from 'react-redux'
import City from './City'
import { Grid } from '@material-ui/core'

// map over an array and produce City cards.

const Cities = (props) => {
 
 const Cities = props.user.cities.map( city => { return <Grid container component={City} key={city.key} city={city}/>})

 return (
  <Grid container item xs={12} sm={6}>
   {Cities}
  </Grid>
 )
}

const mapStateToProps = (state) => {
 return{
  user: state.user
 }
}

export default connect(mapStateToProps)(Cities)
