import React from 'react'
import {connect} from 'react-redux'
import Cities from './Cities'
import { Grid } from '@material-ui/core'
import {fetchCityWeather} from '../../actions/weather'
import {fetchInfo} from '../../actions/user'


class Container extends React.Component{


 fetchweather = () => {
  let token = localStorage.getItem('token')
  console.log("hello")
  if(token){return this.props.fetchInfo(token)}
 }

 render(){
  console.log(this.props)
  return (
   <Grid container item >
    {this.props.user.requesting && this.props.user.cities ? <Cities /> : this.fetchweather()}
   </Grid>
  )
 }
}

const mapStateToProps = (state) => {
 return {
  user: state.user
 }
}

export default connect(mapStateToProps, {fetchCityWeather, fetchInfo})(Container)
