import React from 'react'
import LatestArticles from '../components/LatestArticles'
import Navbar from '../components/navbar/Navbar'

const Bollywood = () => {

  return (
    <div className='w-full bg-white h-screen lg:w-9/12 m-auto '>
      <Navbar/>
      <h1 className="text-2xl m-2 font-semibold lg:text-3xl">Bollywood</h1>
      <LatestArticles id={1}/>
      
    </div>
  )
}

export default Bollywood