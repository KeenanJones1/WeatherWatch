import React from 'react'
import { Typography } from '@material-ui/core'
const Temperature = () => {
 return (
  <div id="main-temperature">
   <Typography variant ="h2" className="temperature-degree" align="center" >38°</Typography>
   <div className="temperature-details"></div>
  </div>
 )
}

export default Temperature
