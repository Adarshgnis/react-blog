import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from './Data/DataFile'

function LatestArticles(props) {

  const [context] = useContext(store)
  console.log(context)


  return (
    <div className='mx-2'>
        {context.filter((data) => 
          data.id === props.id
        ).map((data) => {
            return(
              <Link to={data.title} state={{data}}>
                <div className='lg:w-1/2 grid grid-cols-3 mb-5 '>
                    <img className='col-span-1 h-4/5 my-auto w-full' src={data.img} alt="" />
                    <div className="p-3 col-start-2 col-end-4">
                    <h2 className='text-xl '>{data.title}</h2>
                    <p className='text-sm text-gray-400 pt-2'>{data.description}</p>
                    </div>
                    <hr className='col-span-3'/>
                </div>
              </Link>
            )
            
        })}
      
      
      
    </div>
  )
}

export default LatestArticles
