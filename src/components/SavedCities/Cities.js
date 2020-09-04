import React from 'react'
import {connect} from 'react-redux'
import City from './City'
import { Grid } from '@material-ui/core'

class Cities extends React.Component{

 
 renderCities = () =>  { return this.props.user.cities.map( city => <City key={city.key} city={city} />)}
 render(){ 
  console.log(this.props)
  return (
   <Grid container item id="saved-cities-container" direction="row" justify="space-evenly">
    {this.props.user.cities.length > 0 && this.props.user.requesting ? this.renderCities() : <p>No Cities</p>}
   </Grid>
  )
 }
}

const mapStateToProps = (state) => {return{ user: state.user}}

export default connect(mapStateToProps)(Cities)
