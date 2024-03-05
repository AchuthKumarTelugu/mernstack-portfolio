import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'

function Home() {
  return (
    <div className=''>
      <Header/>
      <div className="bg-primary px-40">
      <Intro/>
      <About/>
      <Experiences/>
      </div>
    </div>
  )
}

export default Home
