import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from './Data/DataFile'

function TheLatest() {

  const [context] = useContext(store)
  
  return (
    <div className='mt-20 m-2'>
      <h2 className='text-2xl lg:text-4xl'>The Latest</h2>
      <div className='h-96 grid lg:grid-cols-3 gap-7 mt-8'>
        {context.filter((data) => 
          data.id === 1
        ).map((data) => {
          return(
            <Link to={data.title} state={{data}}>
              <div className='w-3/4 mx-auto lg:w-auto px-5'>
                <img className='w-full h-80' src={data.img} alt="" />
                <h2>{data.title}</h2>
              </div>
            </Link>
          )
        })}
        
      </div>
    </div>
  )
}

export default TheLatest
