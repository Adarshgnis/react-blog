import React from 'react'

function HeroSection() {



  return (
          <div className='h-2/3 grid lg:grid-cols-3 gap-1 m-2 mt-8 grid-cols-1'>
            <div className="bg-red-400  rounded-lg bg-cover row-span-2 col-span-2 bg-[url('https://images.unsplash.com/photo-1675750318176-98573021fc30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')]">
                <h1 className='text-white text-xl p-5'>Title- some text</h1>  
            </div>
            <div className="bg-yellow-400 rounded-lg bg-cover bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
                <h1 className='text-white text-xl p-5'>Title- some text</h1>
            </div>
            <div className="bg-green-400  rounded-lg bg-cover bg-[url('https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
                <h1 className='text-white text-xl p-5'>Title- some text</h1>
            </div>
          </div>
        )
  }
export default HeroSection
