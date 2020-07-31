import React, { Component, Fragment } from 'react'
import Location from './Location'
import LocationTime from './LocationTime'
import WeatherIcon from './WeatherIcon'
import WeatherDetails from './WeatherDetails/WeatherDetails'
import { Card, IconButton } from '@material-ui/core'
import { ExpandLess } from '@material-ui/icons'
import Temperature from '../Temperature/Temperature'


class FeaturedCard extends Component{
 render(){
  return (
   <Card className="card" id="feature-card" variant="outlined">
    <Location />
    <Temperature/>
    <LocationTime />
    <WeatherIcon />
   
    <Fragment>
      <WeatherDetails/>
    </Fragment>
   </Card>
  )
 }
}

export default FeaturedCard
