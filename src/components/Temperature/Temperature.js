import React, { useState } from 'react'

// onclick degree goes to celceius instead of farheitean 

const Temperature = () => {
 const [measurement, setMeasurement ] = useState(true)
 return (
  <div>
   <h1 id="temp">68°</h1>
  </div>
 )
}

export default Temperature
