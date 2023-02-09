import React from 'react'
// import Advertisement from '../components/Advertisement'
// import Gallery from '../components/Gallery'
import HeroSection from '../components/HeroSection'
// import LatestArticles from '../components/LatestArticles'
import Navbar from '../components/navbar/Navbar'
import TheLatest from '../components/TheLatest'
// import TopPosts from '../components/TopPosts'

const Home = () => {
  return (
    <div className='w-full bg-white h-screen lg:w-9/12 m-auto '>
      <Navbar/>
      <HeroSection/>
      <TheLatest/>
    
    </div>
  )
}

export default Home