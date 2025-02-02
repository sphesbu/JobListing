import React from 'react'
import Hero from '../componets/Hero';
import Homecards from '../componets/Homecards'
import Jobslistings from '../componets/Jobslistings'
import ViewAllJobs from '../componets/ViewAllJobs'
function Home() {
  return (
    <>
        <Hero />
        <Homecards />
        <Jobslistings isHome={true}  />
    </>
  )
}

export default Home