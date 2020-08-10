import React, { Component } from 'react'
import Location from './Location'
import LocationTime from './LocationTime'
import WeatherIcon from './WeatherIcon'
// import WeatherDetails from './WeatherDetails/WeatherDetails'
import { Grid, IconButton } from '@material-ui/core'
import { ExpandLess } from '@material-ui/icons'
import Temperature from './WeatherDetails/Temperature'

// redux
import { connect } from "react-redux";
import {fetchWeek} from '../../actions/weather'


class FeaturedCard extends Component{

  render(){
    const {weather} = this.props
  return (
    <Grid className="main-weather" id="main-weather-container"  container direction= 'column' xs={12}>
      <Grid item className="container" id="featured-container" direction="column" align="center">
        <Location locationName={weather.city} country={weather.country}/>
        <LocationTime />
        <Temperature temp={weather.temp}/>
        <WeatherIcon main={weather.weather} description={weather.description}/>
      </Grid>


      <Grid item align="center" >
        <IconButton onClick = {() => this.props.toggleDetails()}>
          <ExpandLess id="view-details" fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.weather.mainWeather)
  return{
    weather: state.weather.mainWeather
  }
}

export default connect(mapStateToProps, {fetchWeek})(FeaturedCard)
