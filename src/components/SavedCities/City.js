import React from 'react'
import {connect} from 'react-redux'
import { Card, Typography, Grid, IconButton, Dialog, DialogContent, DialogActions, DialogTitle, Button} from '@material-ui/core'
import {Delete} from '@material-ui/icons'
import {fetchCityWeather} from '../../actions/weather'
import {removeCity} from '../../actions/user'

class City extends React.Component{
 constructor(props){
  super(props)
  this.state  = {
   highTemp: '46',
   lowTemp: '10',
   unit: 'F',
   name: props.city.name,
   country: props.city.country,
   open: false,
  }
 }

//  Add a delete button to each card that deletes a city from the user saved cities.

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

 handleDelete = (cityId, cityKey) => {
    this.props.removeCity(cityId, cityKey)
 }

 handleDialog = () => {
    this.setState((prevState) => ({
        open: !prevState.open
    }))
 }

 



 render(){
  const {highTemp, lowTemp, unit, name, country} = this.state
    console.log(this.props)
  return (
   <Grid container item className="saved-cities" component={Card} justify="space-evenly" xs={3} sm={3}>
    <Grid container item className="saved-cities-temps" justify="space-evenly">
     <Grid item id="high-temp" direction="column">
  <Typography variant="subtitle1">{`${highTemp}°${unit}`}</Typography>
      <Typography variant="subtitle2">High</Typography>
     </Grid>
     <Grid item id="low-temp" direction="column">
      <Typography variant="subtitle1">{`${lowTemp}° ${unit}`}</Typography>
      <Typography variant="subtitle2">Low</Typography>
     </Grid>
    </Grid>
    <Grid container item className="saved-cities-name" justify="center">
     <Typography variant="h6" className="saved-city-names">{name}, {country}</Typography>
    </Grid>
    <Grid container item className="saved-cities-weather">
    </Grid>
    <IconButton onClick={() => this.handleDialog()}>
        <Delete/>
    </IconButton>
    <Dialog open={this.state.open} onClose={() => this.handleDialog()} aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle>
            {'Delete this city from your account'}
        </DialogTitle>
        <DialogContent>

        </DialogContent>
        <DialogActions>
            <Button onClick={() => this.handleDelete(this.props.city.id, this.props.city.key)}>Yes</Button>
            <Button onClick={() => this.handleDialog()}>No</Button>
        </DialogActions>
    </Dialog>
   </Grid>
  )
 }
}

const mapStateToProps = (state) => {
 return{ requesting: state.user.requesting}
}

export default connect(mapStateToProps, {fetchCityWeather, removeCity})(City)
