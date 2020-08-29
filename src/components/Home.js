import React, { Component } from 'react'
import {connect} from 'react-redux'
import Head from './Head/Head.js'
import FeaturedCard from './FeatureCard/FeaturedCard'
import WeatherDetails from './FeatureCard/WeatherDetails/WeatherDetails'
import SavedCities from './SavedCities/Container'
import { Grid } from '@material-ui/core'

class Home extends Component {
 constructor(){
  super()
  this.state = {
   showDetails: false
  }
 }

 componentDidMount(){

 }

 toggleDetails = () => {
  this.setState(prevState => ({ showDetails : !prevState.showDetails }))
 }

 render() {
  return (
   <Grid className="home" container direction="column" alignItems="center" justify="space-evenly">
    <Grid item container className="home-container">
     <Head />
    </Grid>
    <Grid item container className="home-container"  alignItems="center" justify="space-evenly" hidden>
     
    { this.state.showDetails === true ? <WeatherDetails toggleDetails = {this.toggleDetails}/> : <FeaturedCard toggleDetails = {this.toggleDetails}/> }
    </Grid>


    <Grid item container className="home-container">
     <SavedCities />
    </Grid>
   </Grid>
  )
 }
}

// Recieves the usercities and passes them to the savedCities

const mapStateToProps = (state) => {
 return {
  user: state.user,
 weather: state.weather
 }
}


export default connect(mapStateToProps)(Home)