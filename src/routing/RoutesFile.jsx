import React from 'react'
import { Routes,Route } from "react-router-dom";
import Home from '../pages/Home'
import Bollywood from '../pages/Bollywood'
import Technology from '../pages/Technology'
import Hollywood from '../pages/Hollywood'
import Fitness from '../pages/Fitness'
import Food from '../pages/Food';
import FullView from '../pages/FullView';

const RoutesFile = () => {
  return (
    <>
    
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/Bollywood" element={<Bollywood />} />
      <Route path="/Technology" element={<Technology />} />
      <Route path="/Hollywood" element={<Hollywood />} />
      <Route path="/Fitness" element={<Fitness />} />
      <Route path="/Food" element={<Food />} />
      <Route path='Home/:view' element={<FullView/>}/>
      <Route path='/:view' element={<FullView/>}/>
      <Route path='Bollywood/:view' element={<FullView/>}/>
      <Route path='Technology/:view' element={<FullView/>}/>
      <Route path='Hollywood/:view' element={<FullView/>}/>
      <Route path='Fitness/:view' element={<FullView/>}/>
      <Route path='Food/:view' element={<FullView/>}/>
      {/* <Route path="*" element={<PageNotFound/>} /> */}
    </Routes>
    </>
  )
}

export default RoutesFile
