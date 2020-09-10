import React, {  } from 'react'
import Location from './Location'
import WeatherIcon from './WeatherIcon'
import { Grid, IconButton, Tooltip } from '@material-ui/core'
import { ExpandLess } from '@material-ui/icons'
import Temperature from './WeatherDetails/Temperature'

// redux
import {connect} from "react-redux";
import { saveCity } from "../../actions/weather";


class FeaturedCard extends React.Component{

  render(){
    const {mainWeather} = this.props.weather
  return (
    <Grid container item className="main-weather" id="main-weather-container" direction= 'column' xs={12}>
      <Tooltip title={this.props.user.login === true && mainWeather.forcasts.length > 0 ? "Add Card to Profile" : null}>
      <Grid container item className="container" id={this.props.user.login === true && mainWeather.forcasts.length > 0 ? "featured-container" : null} direction="column" align="center"
      onClick={ mainWeather.forcasts.length > 0 ? () => this.props.saveCity(mainWeather) : null }>
        <Location locationName={mainWeather.cityName} country={mainWeather.country}/>
        <Temperature temp={mainWeather.temp}/>
        <WeatherIcon main={mainWeather.weather} />
      </Grid>
      </Tooltip>
      <Grid item align="center" >
        <IconButton onClick = {() => this.props.toggleDetails()}>
      {this.props.weather.mainWeather.forcasts.length > 0 ? <ExpandLess id="view-details" fontSize="large" /> : null }
        </IconButton>
      </Grid>
    </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    weather: state.weather,
    user: state.user
  }
}

export default connect(mapStateToProps, {saveCity})(FeaturedCard)
