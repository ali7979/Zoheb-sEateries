import React from 'react'
import logo from '../assets/adminlogo.png'
import profile from '../assets/profile.jpeg'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo'  src={logo} alt="" />
      <img className='profile' src={profile} alt="" />

    </div>
  )
}

export default Navbar
