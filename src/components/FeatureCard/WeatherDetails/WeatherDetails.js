import React from 'react'
import { Card, IconButton } from '@material-ui/core'
import { ExpandLess } from '@material-ui/icons'

const WeatherDetails = () => {
 return (
  <div>
    <ExpandLess id="view-details" />

   <div className="temperature-weekly">
    {/* This goes on The back of the card swiping up or clicking */}
   </div>
  </div>
 )
}

export default WeatherDetails
