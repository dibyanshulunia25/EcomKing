import React from 'react'
import Hero from '../components/Hero'
import Latest from '../components/Latest'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterbox from '../components/NewsLetterbox'

const Home = () => {
  return (
    <div>
      <Hero />
      <Latest />
      <BestSeller />
      <OurPolicy />
      <NewsLetterbox />
    </div>
  )
}

export default Home