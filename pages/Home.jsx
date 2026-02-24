import React from 'react'
import Hero from '../components/Hero'
import Services from '@/components/Services'
import AboutPreview from '@/components/home/AboutPreview'

function Home() {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <Services/>
    </div>
  )
}

export default Home

