import React, { Component } from 'react'
import Head from './Head/Head.js'
import FeaturedCard from './FeatureCard/FeaturedCard'
import Temperature from "./Temperature/Temperature";
import SavedCities from './SavedCities/Container'

class Home extends Component {
 render() {
  return (
   <div>
    <Head />
    <FeaturedCard />
    <Temperature />
    <SavedCities />
   </div>
  )
 }
}

export default Home