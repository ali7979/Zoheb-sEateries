import React from 'react'
import addicon from '../assets/icon/add.png'
import bellicon from '../assets/icon/bell.png'
import list from '../assets/icon/list.png'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
      <div className="sidebar">
      <div className="sidebar-options">

        <NavLink to='/add' className='sidebar-option'>
        <img className='icon'  src={addicon} alt="" />
        <h4>Add Items</h4>

        </NavLink>
        <NavLink to='/orders' className='sidebar-option'>
        <img className='icon'  src={bellicon} alt="" />
        <h4>Orders</h4>


        </NavLink>
        <NavLink to='/list' className='sidebar-option'>
        <img className='icon'  src={list} alt="" />
        <h4>List</h4>

        </NavLink>

        </div>




      </div>
  )
}

export default Sidebar
