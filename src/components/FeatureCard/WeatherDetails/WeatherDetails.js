import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Table, TableContainer, TableHead, TableRow, Paper, TableCell, TableBody, IconButton } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

class WeatherDetails extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  dateFormatter = (dateStr) => {
    let d = new Date(dateStr)
    let newDate = d.toString()
    return newDate.slice(0,3)
  }

   createTableRow = (dataArr) => {
    return dataArr.map(data => {
      return <TableRow key={this.dateFormatter(data.Date)}>
    <TableCell>{this.dateFormatter(data.Date)}</TableCell>
    <TableCell>{data.Day.IconPhrase}</TableCell>
    <TableCell>{data.Temperature.Maximum.Value}°{data.Temperature.Maximum.Unit}</TableCell>
    <TableCell>{data.Temperature.Minimum.Value}°{data.Temperature.Minimum.Unit}</TableCell>
      <TableCell>{data.Night.IconPhrase}</TableCell>
    </TableRow>
    })
   }

   defaultTable = () => {
    return  <div>
      Searching for Weather Details
    </div>
    }

  render(){
    return (
      <TableContainer component={Paper} className="container" id="weather-details-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Day</TableCell>
              <TableCell>High/Temp</TableCell>
              <TableCell>Low/Temp</TableCell>
              <TableCell>Night</TableCell>
            </TableRow>
          </TableHead>
    
          <TableBody>
          { this.props.forcast ? this.createTableRow(this.props.forcast) : this.defaultTable()}
          </TableBody>
        </Table>
    
        <IconButton onClick = {() => this.props.toggleDetails()}>
          <ExpandMore id="view-details" fontSize="large" />
        </IconButton>
      </TableContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    forcast: state.weather.mainWeather.forcasts
  }
}

export default connect(mapStateToProps)(WeatherDetails)


