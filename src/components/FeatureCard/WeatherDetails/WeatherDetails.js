import React, {Component} from 'react'
import { Table, TableContainer, TableHead, TableRow, Paper, TableCell, TableBody, IconButton } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

class WeatherDetails extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    console.log("Weather Details props", this.props)
    return (
      <TableContainer component={Paper} className="container" id="weather-details-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>Temp</TableCell>
              <TableCell>Feels-like</TableCell>
              <TableCell align="right">Precip</TableCell>
            </TableRow>
          </TableHead>
    
          <TableBody>
    
            <TableRow>
              {/* Days change depends on what day it is */}
              <TableCell>Monday</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>90°</TableCell>
              <TableCell>120°</TableCell>
              <TableCell>50%</TableCell>
            </TableRow>
    
            <TableRow>
              <TableCell>Tuesday</TableCell>
            </TableRow>
    
            <TableRow>
              {/* Days change depends on what day it is */}
              <TableCell>Wednesday</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>90°</TableCell>
              <TableCell>120°</TableCell>
              <TableCell>50%</TableCell>
            </TableRow>
    
            <TableRow>
              {/* Days change depends on what day it is */}
              <TableCell>Thursday</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>90°</TableCell>
              <TableCell>120°</TableCell>
              <TableCell>50%</TableCell>
            </TableRow>
    
    
            <TableRow>
              {/* Days change depends on what day it is */}
              <TableCell>Friday</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>90°</TableCell>
              <TableCell>120°</TableCell>
              <TableCell>50%</TableCell>
            </TableRow>
    
            <TableRow>
              {/* Days change depends on what day it is */}
              <TableCell>Saturday</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>90°</TableCell>
              <TableCell>120°</TableCell>
              <TableCell>50%</TableCell>
            </TableRow>
    
            <TableRow>
              {/* Days change depends on what day it is */}
              <TableCell>Sunday</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>90°</TableCell>
              <TableCell>120°</TableCell>
              <TableCell>50%</TableCell>
            </TableRow>
    
          </TableBody>
        </Table>
    
        <IconButton onClick = {() => this.props.toggleDetails()}>
          <ExpandMore id="view-details" fontSize="large" />
        </IconButton>
      </TableContainer>
    )
  }
}

export default WeatherDetails


