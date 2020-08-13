import React, {  } from 'react'
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


class FeaturedCard extends React.Component{

  render(){
    console.log(this.props)
    const {weather} = this.props
  return (
    <Grid container item className="main-weather" id="main-weather-container" direction= 'column' xs={12}>
      <Grid container item className="container" id="featured-container" direction="column" align="center">
        <Location locationName={weather.city} country={weather.country}/>
        <LocationTime />
        <Temperature temp={weather.temp}/>
        <WeatherIcon main={weather.weather} description={weather.description}/>
      </Grid>


      <Grid item align="center" >
        <IconButton onClick = {() => this.props.toggleDetails()}>
          { this.props.user ? <ExpandLess id="view-details" fontSize="large" /> : null }
        </IconButton>
      </Grid>
    </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    weather: state.weather.mainWeather,
    user: state.user.login
  }
}

export default connect(mapStateToProps, {fetchWeek})(FeaturedCard)
