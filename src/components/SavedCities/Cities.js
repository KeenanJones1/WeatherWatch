import React from 'react'
import {connect} from 'react-redux'
import City from './City'
import { Grid } from '@material-ui/core'
import { fetchCityWeather } from '../../actions/weather'


class Cities extends React.Component{
 
  renderCities = () =>  {   
  return this.props.user.cities.map( city => 
  // console.log("Hello 3x")
  <City key={city.key} city={city} /> 
  
  )}
 render(){
  console.log(this.props.user.cities)
 
  return (
   <Grid container item id="saved-cities-container" direction="row" justify="space-evenly">
    {/* {this.props.user.cities.length > 0 && this.props.user.requesting === 'done' ? Cities : <p>No Cities</p>} */}
 {this.renderCities()}
   </Grid>
  )
 }
}

const mapStateToProps = (state) => {
 return{
  user: state.user
 }
}

export default connect(mapStateToProps, {fetchCityWeather})(Cities)
