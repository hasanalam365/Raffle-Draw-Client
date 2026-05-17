import React from 'react'
import Banners from './Banners'
import WinnersBar from './WinnersBar'
import FeaturesCompetetion from './FeaturesCompetetion'
import HowItWorks from './HowItWorks'
import RecentWinners from './RecentWinners'
import TestimonialsSection from './TestimonialsSection'
import FAQ from './FAQ'
import MessageSend from './MessageSend'

const Homes = () => {
  return (
    <div>
        <Banners/>
        <WinnersBar/>
        <FeaturesCompetetion/>
        <HowItWorks/>
        <RecentWinners/>
        <TestimonialsSection/>
        <FAQ/>
        <MessageSend/>
      
    </div>
  )
}

export default Homes
