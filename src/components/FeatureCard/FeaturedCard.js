import React, { Component, Fragment } from 'react'
import Location from './Location'
import LocationTime from './LocationTime'
import WeatherIcon from './WeatherIcon'
import WeatherDetails from './WeatherDetails/WeatherDetails'
import { Grid, IconButton } from '@material-ui/core'
import { ExpandLess } from '@material-ui/icons'
import Temperature from '../Temperature/Temperature'


class FeaturedCard extends Component{
  render(){
  return (
    <Grid className="main-weather" id="main-weather-container"  container direction= 'column' xs={12} sm={6}>
      <Grid item >
        <Location />
        <LocationTime />
        <Temperature/>
      </Grid>
      <Grid item>
        <WeatherDetails />
      </Grid>
    </Grid>
    )
  }
}

export default FeaturedCard
