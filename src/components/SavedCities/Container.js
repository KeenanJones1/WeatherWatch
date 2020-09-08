import React from 'react'
import {connect} from 'react-redux'
import Cities from './Cities'
import NoCities from './NoCities'
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
  if(this.props.user.username === ""){this.props.fetchInfo(this.state.token)}
 }


 render(){
  console.log("Container props", this.props)
  return (
   <Grid container >
    {this.props.user.cities.length > 0 ? <Cities /> : <NoCities/>}
   </Grid>
  )
 }
}
const mapStateToProps = (state) => {
 return {user: state.user}
}


export default connect(mapStateToProps, {fetchInfo})(Container)
