import React from 'react'
import {connect} from 'react-redux'
import City from './City'
import { Grid } from '@material-ui/core'
import { fetchSavedCityWeather } from '../../actions/weather'


class Cities extends React.Component{
 
 render(){

  const Cities = this.props.user.cities.map( city => 
   // idea is to move this to the home componentdidmount or put component
   this.props.fetchSavedCityWeather(city.key),
   // <City key={city.key} city={city} />

  )
 
  return (
   <Grid container item id="saved-cities-container" direction="row" justify="space-evenly">
    {this.props.user.cities.length > 0 ? Cities : <p>No Cities</p>}
 
   </Grid>
  )
 }
}

const mapStateToProps = (state) => {
 return{
  user: state.user
 }
}

export default connect(mapStateToProps, {fetchSavedCityWeather})(Cities)
