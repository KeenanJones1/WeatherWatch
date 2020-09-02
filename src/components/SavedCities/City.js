import React from 'react'
import { Card, Typography, Grid } from '@material-ui/core'
import cloud from '../../images/cloud.png'
// import {} from "../../actions/user"

class City extends React.Component{

  

 render(){
  const {temp} = this.props.city
  console.log(temp)
  return (
   <Grid container item className="saved-cities" component={Card} justify="space-evenly" xs={3} sm={3}>
 
    <Grid container item className="saved-cities-temps" justify="space-evenly">
     <Grid item id="high-temp" direction="column">
      <Typography variant="subtitle1">{ temp ? `${temp.Maximum.Value}° ${temp.Maximum.Unit}` : '46°' }</Typography>
      <Typography variant="subtitle2">High</Typography>
     </Grid>
     <Grid item id="low-temp" direction="column">
      <Typography variant="subtitle1">{ temp ? `${temp.Minimum.Value}° ${temp.Minimum.Unit}` : '10°' }</Typography>
      <Typography variant="subtitle2">Low</Typography>
     </Grid>
    </Grid>
 
    <Grid container item className="saved-cities-name" justify="center">
     <Typography variant="h6" className="saved-city-names">{this.props.city.name}, {this.props.city.country}</Typography>
    </Grid>
    <Grid container item className="saved-cities-weather">

      
    </Grid>
    {/* <Grid container direction="column" className="saved-cities-temp">
    
    </Grid>
    <Grid container direction="column">
    </Grid>
    <Grid container direction="column" className="saved-cities-temp">
     
    </Grid>
    <img src={cloud} alt="" srcset="" width="100vw" background-color="blue"/> */}
   </Grid>
  )
 }
}

export default City
