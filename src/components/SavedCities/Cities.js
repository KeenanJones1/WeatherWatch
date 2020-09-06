import React from 'react'
import {connect} from 'react-redux'
import City from './City'
import { Grid } from '@material-ui/core'
import {fetchCityWeather} from '../../actions/weather'

class Cities extends React.Component{

 render(){ 
  return (
   <Grid container item id="saved-cities-container" direction="row" justify="space-evenly">
    {this.props.userCities.map( city => <City key={city.key} city={city} />)}
   </Grid>
  )
 }
}

const mapStateToProps = (state) => {return{ userCities: state.user.cities}}

export default connect(mapStateToProps, {fetchCityWeather})(Cities)