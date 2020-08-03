import React, { Component, Fragment } from 'react'
import Location from './Location'
import LocationTime from './LocationTime'
import WeatherIcon from './WeatherIcon'
import WeatherDetails from './WeatherDetails/WeatherDetails'
import { Grid, IconButton } from '@material-ui/core'
import { ExpandLess } from '@material-ui/icons'
import Temperature from './WeatherDetails/Temperature'


class FeaturedCard extends Component{
  render(){
  return (
    <Grid className="main-weather" id="main-weather-container"  container direction= 'column' xs={12}>

      <Grid item className="container" id="featured-container" direction="column" align="center">
        <Location />
        <LocationTime />
        <Temperature/>
        <WeatherIcon />
        {/* Weather details icon only appear when the screen is small  */}
        {/* When the screen is full allow the detais to appear on the side */}
        {/* <WeatherDetails /> */}
      </Grid>


      <Grid item align="center" >
        <ExpandLess id="view-details" fontSize="large" />
      </Grid>

    </Grid>
    )
  }
}

export default FeaturedCard
