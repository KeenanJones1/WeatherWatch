import React from 'react'
import {connect} from 'react-redux'
import { Card, Typography, Grid } from '@material-ui/core'
import {fetchCityWeather} from '../../actions/weather'

class City extends React.Component{
 constructor(props){
  super(props)
  this.state  = {
   highTemp: '46',
   lowTemp: '10',
   unit: 'F',
   name: props.city.name,
   country: props.city.country
  }
 }

 componentDidMount(){
  this.props.fetchCityWeather(this.props.city.key)
 }

 componentWillReceiveProps(nextProps){
  if(nextProps.city.temp !== undefined){
   this.setState({
    highTemp: nextProps.city.temp.Maximum.Value,
    lowTemp: nextProps.city.temp.Minimum.Value
   })
  }
 }

 



 render(){
  const {highTemp, lowTemp, unit, name, country} = this.state
  return (
   <Grid container item className="saved-cities" component={Card} justify="space-evenly" xs={3} sm={3}>
    <Grid container item className="saved-cities-temps" justify="space-evenly">
     <Grid item id="high-temp" direction="column">
  <Typography variant="subtitle1">{`${highTemp}°`}</Typography>
      <Typography variant="subtitle2">High</Typography>
     </Grid>
     <Grid item id="low-temp" direction="column">
      <Typography variant="subtitle1">{`${lowTemp}°`}</Typography>
      <Typography variant="subtitle2">Low</Typography>
     </Grid>
    </Grid>
    <Grid container item className="saved-cities-name" justify="center">
     <Typography variant="h6" className="saved-city-names">{name}, {country}</Typography>
    </Grid>
    <Grid container item className="saved-cities-weather">
    </Grid>
   </Grid>
  )
 }
}

const mapStateToProps = (state) => {
 return{ requesting: state.user.requesting}
}

export default connect(mapStateToProps, {fetchCityWeather})(City)
