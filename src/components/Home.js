import React, { Component } from 'react'
import {connect} from 'react-redux'
import Head from './Head/Head.js'
import FeaturedCard from './FeatureCard/FeaturedCard'
import WeatherDetails from './FeatureCard/WeatherDetails/WeatherDetails'
import Container from './SavedCities/Container.js'
import { Grid } from '@material-ui/core'
import Loading from './Loading'
import { fetchWeather } from '../actions/weather'

class Home extends Component {
 constructor(){
  super()
  this.state = {showDetails: false}
 }



 toggleDetails = () => {
  this.setState(prevState => ({ showDetails : !prevState.showDetails }))
 }

 // Infinte Loop!!!!!! 
 // componentWillReceiveProps(nextProps, props){
 //  // const {user} = nextProps
 //  // if(user.requesting === "done" && nextProps.weather.mainWeather.cityName === ""){
 //  //   let savedCity = user.cities[user.cities.length -1]
 //  //   this.props.fetchWeather(savedCity.name)
 //  //   console.log(nextProps.weather.mainWeather.cityName)
 //  // }
 //  console.log("nextProps", nextProps)
 //  console.log("props", props)
 // }

 // loadingFeature = () => {
 //  let savedCity = this.props.user.cities[this.props.user.cities.length -1]
 //  // this.props.fetchWeather(savedCity.name)
 //  console.log(savedCity.name)
 // }

 render() {
  return (
   <Grid className="home" container direction="column" alignItems="center" justify="space-evenly">
    {/* { this.props.user.cities.length > 2 && this.props.weather.mainWeather.cityName === ""  ? this.loadingFeature() : null} */}
    <Grid item container className="home-container">
     <Head />
    </Grid>
    <Grid item container className="home-container"  alignItems="center" justify="space-evenly" hidden>
     
    { this.state.showDetails === true ? <WeatherDetails toggleDetails = {this.toggleDetails}/> : <FeaturedCard toggleDetails = {this.toggleDetails}/> }
    </Grid>


    <Grid item container className="home-container">
     {this.props.user.login === true || localStorage.getItem('token') ? <Container/> : <Loading/>}
    </Grid>
   </Grid>
  )
 }
}


const mapStateToProps = (state) => {return {
 weather: state.weather,
 user: state.user}}


export default connect(mapStateToProps, {fetchWeather})(Home)