import React, { Component } from 'react'
import cloud from '../../images/cloud.png'
import rain from '../../images/rain-cloud.png'
import snow from '../../images/snow-cloud.png'
import sunny from '../../images/sunny-icon.png'
import { Grid } from '@material-ui/core'

export default class WeatherIcon extends Component {
  render() {
 const iconDynamic = () => {
  if(keywordSearch(this.props.main, 'cloud')){
   return cloud;
 }
 else if(keywordSearch(this.props.main, 'rain')){
   return rain
 }
 else if(keywordSearch(this.props.main, 'sunny')){
  return sunny
}
 else if(keywordSearch(this.props.main, 'snow')){
  return snow
}
else{
 return cloud;
}
 }

 const keywordSearch = (weather, icon) => {
  let newWeather = weather.replace(/\s/g, '').toLowerCase()
  return newWeather.includes(icon)
 }
  


  return (
   <Grid id="weather-icon" align="center">
    <img src={iconDynamic()} alt="" />
   </Grid>
  )
 }
}





