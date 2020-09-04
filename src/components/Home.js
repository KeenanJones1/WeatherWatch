import React, { Component } from 'react'
import {connect} from 'react-redux'
import Head from './Head/Head.js'
import FeaturedCard from './FeatureCard/FeaturedCard'
import WeatherDetails from './FeatureCard/WeatherDetails/WeatherDetails'
import Container from './SavedCities/Container.js'
import { Grid } from '@material-ui/core'
import Loading from './Loading'

class Home extends Component {
 constructor(){
  super()
  this.state = {showDetails: false}
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
    
     {this.props.user.login === true || localStorage.getItem('token') ? <Container/> : <Loading/>}
    </Grid>
   </Grid>
  )
 }
}


const mapStateToProps = (state) => {return {user: state.user}}


export default connect(mapStateToProps)(Home)