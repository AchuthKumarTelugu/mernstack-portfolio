import React from 'react'

function Intro() {
  return (
    <div className=' bg-primary flex flex-col items-start justify-center space-y-8 py-10 sm:py-5'>
      <h1 className='text-white'>Hi, Iam </h1>
      <h1 className='text-secondary  text-7xl sm:text-5xl  font-semibold'>Achuth kumar .Telugu</h1>
      <h1 className='text-white text-6xl sm:text-4xl font-semibold'>I build things for the web.</h1>
      <p className='text-white w-2/3 sm:w-full'>Enthusiastic and results-oriented MERN stack developer.Eager to leverage strong knowledge of MongoDB, Express, React, and Node.js to contribute to a collaborative and innovative team environment. </p>
      <button className='border-2 border-tertiary  px-10 py-4 rounded text-tertiary sm:py-2 sm:px-7'>Get Started</button>
    </div>
  )
}

export default Intro
