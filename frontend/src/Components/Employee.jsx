import React, { useState } from 'react'
import { useLocation } from 'react-router'

function Employee() {
  const { state} =useLocation();
   return (
    <div className='box-border shadow-2xl shadow-mauve-300 bg-mauve-200 m-auto w-fit p-16 mt-16 rounded-2xl'>
      <p><b className='font-bold font-serif font-stretch-90% '>Name : </b>{state.name}</p>
      <p><b className='font-bold font-serif font-stretch-90%'>Email : </b>{state.email}</p>
      <p><b className='font-bold font-serif font-stretch-90%'>Mobile Number : </b>{state.mobile}</p>
      <p><b className='font-bold font-serif font-stretch-90%'>Designation : </b>{state.designation}</p>
      <p><b className='font-bold font-serif font-stretch-90%'>Company Name : </b>{state.companyName}</p>

    </div>
    
  )
}

export default Employee