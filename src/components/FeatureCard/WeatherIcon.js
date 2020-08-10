import React, { Component } from 'react'
import cloud from '../../images/cloud.png'
import rain from '../../images/rain-cloud.png'
import snow from '../../images/snow-cloud.png'
import sunny from '../../images/sunny-icon.png'
import { Grid } from '@material-ui/core'

export default class WeatherIcon extends Component {
 render() {
  console.log(this.props)

 const iconDynamic = () => {
  if(this.props.main === 'Clouds' || this.props.main === 'Cloud' || this.props.main === 'cloud' || this.props.main === 'clouds'){
   return cloud;
 }
 else if(this.props.main === 'Rain' || this.props.main === 'Rainy' || this.props.main === 'rain' || this.props.main === 'rainy'){
   return rain
 }
 else if(this.props.main === 'Clear' || this.props.main === 'Sunny' || this.props.main === 'sunny' || this.props.main === 'clear'){
  return sunny
}
 else if(this.props.main === 'Snow' || this.props.main === 'Snowing' || this.props.main === 'snow' || this.props.main === 'snowing'){
  return snow
}
else{
 return cloud;
}
 }
  


  return (
   <Grid id="weather-icon" align="center">
    <img src={iconDynamic()} alt="" srcset="" />
   </Grid>
  )
 }
}
