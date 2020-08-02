import React from 'react'
import { Table, TableContainer, TableHead, TableRow, Paper, TableCell, TableBody } from '@material-ui/core'
import { ExpandLess } from '@material-ui/icons'

const WeatherDetails = () => {
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
  </TableContainer>
)
}

export default WeatherDetails


{/* <TableCell>Tuesday</TableCell>
          <TableCell>Wednesday</TableCell>
          <TableCell>Thursday</TableCell>
          <TableCell>Friday</TableCell>
          <TableCell>Saturday</TableCell>
          <TableCell>Sunday</TableCell> */}