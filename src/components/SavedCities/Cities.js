import React from 'react'
import {connect} from 'react-redux'
import City from './City'
import NoCities from './NoCities'
import { Grid } from '@material-ui/core'

class Cities extends React.Component{

 renderCities = () => {
  return this.props.userCities.map( city => <City key={city.id} city={city} />)
 }

 render(){ 
  return (
   <Grid container item id="saved-cities-container" direction="row" justify="space-evenly">
    {this.props.userCities.length > 0 ? this.renderCities() : <NoCities/>}
   </Grid>
  )
 }
}

const mapStateToProps = (state) => {return{ userCities: state.user.cities}}

export default connect(mapStateToProps)(Cities)