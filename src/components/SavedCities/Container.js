import React from 'react'
import {connect} from 'react-redux'
import Cities from './Cities'
import { Grid } from '@material-ui/core'
import {fetchCityWeather} from '../../actions/weather'
import {fetchInfo} from '../../actions/user'


class Container extends React.Component{

 render(){
  return (
   <Grid container item >
    {this.props.user.requesting === 'done' && this.props.user.cities ? <Cities /> : <p>Hello</p>}
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
