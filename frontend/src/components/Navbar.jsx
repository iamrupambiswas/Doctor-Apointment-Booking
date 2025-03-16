import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();
    // const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt='' />

      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1 relative cursor-pointer transition-all duration-300 hover:text-primary'>
            HOME
            <hr className='absolute left-0 bottom-0 h-0.5 bg-primary w-0 transition-all duration-300 ease-in-out hover:w-3/5 data-[active=true]:w-full' data-active={location.pathname === "/"} />
          </li>
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1 relative cursor-pointer transition-all duration-300 hover:text-primary'>
            ALL DOCTORS
            <hr className='absolute left-0 bottom-0 h-0.5 bg-primary w-0 transition-all duration-300 ease-in-out hover:w-3/5 data-[active=true]:w-full' data-active={location.pathname === "/doctors"} />
          </li>
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1 relative cursor-pointer transition-all duration-300 hover:text-primary'>
            ABOUT
            <hr className='absolute left-0 bottom-0 h-0.5 bg-primary w-0 transition-all duration-300 ease-in-out hover:w-3/5 data-[active=true]:w-full' data-active={location.pathname === "/about"} />
          </li>
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1 relative cursor-pointer transition-all duration-300 hover:text-primary'>
            CONTACT
            <hr className='absolute left-0 bottom-0 h-0.5 bg-primary w-0 transition-all duration-300 ease-in-out hover:w-3/5 data-[active=true]:w-full' data-active={location.pathname === "/contact"} />
          </li>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token
          ? <div className="flex item-center gap-2 cursor-pointer group relative">
              <img src={assets.profile_pic} alt="" className="w-8 rounded-full"/>
              <img src={assets.dropdown_icon} alt="" className="w-2.5"/>
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 opacity- hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p onClick={()=>navigate('my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                  <p onClick={()=>navigate('my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                  <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                </div>
              </div>
          </div>

          : <button onClick={() => navigate('/login')} className='bg-primary hover:bg-primaryDark text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>Create account</button>
        }
      </div>
    </div>
  )
}

export default Navbar
