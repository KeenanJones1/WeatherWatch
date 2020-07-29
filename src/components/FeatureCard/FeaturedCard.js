import React, { Component } from 'react'
import Location from './Location'
import LocationTime from './LocationTime'
import WeatherIcon from './WeatherIcon'
import WeatherDetails from './WeatherDetails/WeatherDetails'


class FeaturedCard extends Component{
 render(){
  return (
   <div>
    <Location />
    <LocationTime />
    <WeatherIcon />
    <WeatherDetails />
   </div>
  )
 }
}

export default FeaturedCard
