import React, { Component } from 'react'
import { Typography } from '@material-ui/core'


export default class Location extends Component {
 render() {
  console.log(this.props)
  return (
   <Typography variant="h4" className="" id="location-text" align="center">
     {this.props.locationName ? this.props.locationName : 'Chicago'}, {this.props.country ? this.props.country : 'US'} 
   </Typography>
  )
 }
}
