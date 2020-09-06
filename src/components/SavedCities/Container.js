import React from 'react'
import {connect} from 'react-redux'
import Cities from './Cities'
import { Grid } from '@material-ui/core'
import {fetchInfo} from '../../actions/user'


class Container extends React.Component{
 constructor(){
  super()
  this.state = {
   token: localStorage.getItem('token')
  }
 }

 componentDidMount(){
  this.props.fetchInfo(this.state.token)
 }


 render(){
  return (
   <Grid container item >
    <Cities />
   </Grid>
  )
 }
}
const mapStateToProps = (state) => {
 return {userCities: state.user.cities}
}


export default connect(mapStateToProps, {fetchInfo})(Container)
