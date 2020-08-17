import React from 'react'
import { Typography } from '@material-ui/core'

const Temperature = (props) => {
 return (
  <div id="main-temperature">
   <Typography variant ="h2" className="temperature-degree" align="center" > { props.temp.Value ? `${props.temp.Value}° ${props.temp.Unit}`: '38°'} </Typography>
   <div className="temperature-details"></div>
  </div>
 )
}

export default Temperature
