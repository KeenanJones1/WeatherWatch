import React from 'react'
import {connect} from 'react-redux'
import Cities from './Cities'
import { Grid } from '@material-ui/core'
import {fetchCityWeather} from '../../actions/weather'

class Container extends React.Component{

 componentDidMount(){
  this.props.fetchCityWeather(this.props.user.cities)
 }

 render(){
  console.log(this.props.user)
  return (
   <Grid container item >
    {/* Show either Cities or Weekly Temperatures depending if the login of the user  */}
    {this.props.user.requesting == 'done' ? <Cities /> : <p>Hello</p>}
   </Grid>
  )
 }
}

const mapStateToProps = (state) => {
 return {
  user: state.user,
  weather: state.weather
 }
}

export default connect(mapStateToProps,{fetchCityWeather})(Container)
