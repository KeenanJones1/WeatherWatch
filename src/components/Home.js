import React, { Component } from 'react'
import Head from './Head/Head.js'
import FeaturedCard from './FeatureCard/FeaturedCard'
import SavedCities from './SavedCities/Container'
import { Grid } from '@material-ui/core'

class Home extends Component {
 render() {
  return (
   <Grid className="home" container direction="column" alignItems="center" justify="space-evenly">

    <Grid item container className="home-container">
     <Head />
    </Grid>

    <Grid item container className="home-container">
     <FeaturedCard />
    </Grid>

    <Grid item container className="home-container">
     <SavedCities />
    </Grid>

   </Grid>
  )
 }
}

export default Home