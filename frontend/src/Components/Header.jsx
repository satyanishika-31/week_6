import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <nav className='flex justify-end p-5  bg-gray-400 text-black gap-5'>
        <NavLink to="" className={({isActive})=>(isActive? "text-indigo-500":"")}>Home</NavLink>
        <NavLink to="createemp" className={({isActive})=>(isActive? "text-indigo-500":"")}>CreateEmp</NavLink>
        <NavLink to="listofemp" className={({isActive})=>(isActive? "text-indigo-500":"")}>ListOfEmp</NavLink>
    </nav>
  )
}

export default Header