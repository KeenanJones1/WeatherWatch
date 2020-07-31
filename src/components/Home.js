import React, { Component } from 'react'
import Head from './Head/Head.js'
import FeaturedCard from './FeatureCard/FeaturedCard'
import SavedCities from './SavedCities/Container'

class Home extends Component {
 render() {
  return (
   <div className="home">
    <Head />
    <FeaturedCard />
    <SavedCities />
   </div>
  )
 }
}

export default Home