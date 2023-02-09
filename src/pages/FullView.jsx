import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'


const FullView = () => {
        const data= useLocation().state.data;
        return (
        <div className='w-full bg-white h-screen lg:w-9/12 m-auto '>
        <Navbar/>
        <h2 className='text-2xl font-semibold text-center mt-2'>{data.title}</h2>
        <div className='full-view lg:grid lg:grid-cols-2 mt-5'>
            <img className='mx-auto lg:w-3/4' src={data.img} alt="empty" />
            <p className='bg-slate-100 h-fit pb-3 tracking-wider mx-5 px-2 pt-3 lg:text-base'>{data.description}<br/><br/> <span className='text-gray-500'>Release Date - </span>{data.releaseDate}</p>
        </div>
        </div>
        )
      }  
 
    
export default FullView
