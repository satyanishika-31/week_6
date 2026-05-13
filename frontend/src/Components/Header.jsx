import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <nav className=' border-rose-100/70 bg-white/80 p-5 text-slate-600 shadow-sm backdrop-blur-md'>
      <p className='float-start ml-10 text-lg font-bold italic text-[#103510] sm:text-xl'>Emp_Mang</p>
      <div className='flex justify-end gap-5 text-sm sm:text-base'>

        <NavLink to="" className={({isActive})=>(isActive? "text-[#103510]":"hover:text-[#126245]")}>Home</NavLink>
        <NavLink to="createemp" className={({isActive})=>(isActive? "text-[#103510]":"hover:text-[#126245]")}>CreateEmp</NavLink>
        <NavLink to="listofemp" className={({isActive})=>(isActive? "text-[#103510]":"hover:text-[#126245]")}>ListOfEmp</NavLink>

      </div>
    </nav>
  )
}

export default Header