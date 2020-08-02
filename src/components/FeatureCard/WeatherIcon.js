import React, { Component } from 'react'
import cloud from '../../images/cloud.png'
import { Grid } from '@material-ui/core'

export default class WeatherIcon extends Component {
 render() {
  return (
   <Grid id="weather-icon" align="center">
    <img src={cloud} alt="" srcset="" />
   </Grid>
  )
 }
}
