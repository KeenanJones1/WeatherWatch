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


class FeaturedCard extends React.Component{

  render(){
    console.log("Featured Card props",this.props)
    const {mainWeather} = this.props.weather
  return (
    <Grid container item className="main-weather" id="main-weather-container" direction= 'column' xs={12}>
      <Grid container item className="container" id="featured-container" direction="column" align="center">
        <Location locationName={mainWeather.cityName} country={mainWeather.country}/>
        {/* <LocationTime /> */}
        <Temperature temp={mainWeather.temp}/>
        <WeatherIcon main={mainWeather.weather} />
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
    weather: state.weather,
    user: state.user.login
  }
}

export default connect(mapStateToProps)(FeaturedCard)
