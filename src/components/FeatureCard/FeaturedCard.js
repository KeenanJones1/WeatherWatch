import React, { Component } from 'react'
import Location from './Location'
import LocationTime from './LocationTime'
import WeatherIcon from './WeatherIcon'
import WeatherDetails from './WeatherDetails/WeatherDetails'
import { Card } from '@material-ui/core'


class FeaturedCard extends Component{
 render(){
  return (
   <Card className="card" id="feature-card" variant="outlined">
    <Location />
    <LocationTime />
    <WeatherIcon />
    <WeatherDetails />
   </Card>
  )
 }
}

export default FeaturedCard
