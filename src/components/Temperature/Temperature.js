import React, { useState } from 'react'

// onclick degree goes to celceius instead of farheitean 

const Temperature = () => {
 const [measurement, setMeasurement ] = useState(true)
 return (
  <div>
   38°
  </div>
 )
}

export default Temperature
