import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenuAlt3 } from 'react-icons/hi'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className='bg-white shadow-xl lg:shadow-none lg:border-b-2 '>
            <div className="nav__logo p-5 flex justify-between  lg:justify-center">
                <div className="nav__logo_left flex">
                    <div className='-rotate-90  flex '><p className='text-xxs leading-10 tracking-wide  lg:text-2xl '>The</p></div>
                    <h1 className='font-sans text-3xl font-bold  lg:text-6xl'>Siren</h1>
                </div>
                <div className="nav__logo_right">
                <div className="app__navbar-menu  lg:hidden">
                    <HiMenuAlt3 className='text-black mt-2 text-3xl ' onClick={() => setToggle(!toggle)} />

                    {toggle && (
                        <div className=' bg-white w-screen fixed top-20 bottom-45 right-0 '>
                            <ul className='app__navbar-menu flex justify-evenly pb-4  flex-col  items-center w-screen shadow-xl'>
                            {['Home', 'Bollywood', 'Technology', 'Hollywood', 'Fitness', 'Food'].map((item) => (

                                <NavLink  to={`/${item}`}>
                                    <li className='text-xl font-medium m-3 border-b-2 border-b-white hover:text-blue-900 hover:border-b-blue-800' onClick={() => setToggle(false)}>{item}</li>
                                </NavLink>

                            ))}
                            </ul>
                        </div>
                    )}
            </div>
                </div>
            </div>

            <ul className='app__navbar-menu flex justify-evenly pb-4 max-lg:hidden'>
                {['Home', 'Bollywood', 'Technology', 'Hollywood', 'Fitness', 'Food'].map((item) => (

                    <NavLink to={`/${item}`}>
                        <li className='text-xl hover:text-blue-900'>{item}</li>
                    </NavLink>

                ))}
            </ul>
            

        </nav>
    )
}

export default Navbar