import React, { Component } from 'react'
import cloud from '../../images/cloud.png'
import rain from '../../images/rain-cloud.png'
import snow from '../../images/snow-cloud.png'
import sunny from '../../images/sunny-icon.png'
import { Grid } from '@material-ui/core'

export default class WeatherIcon extends Component {
 render() {
  console.log(this.props)
  return (
   <Grid id="weather-icon" align="center">
    <img src={snow} alt="" srcset="" />
   </Grid>
  )
 }
}
