import React, { useState } from 'react'
import { useLocation } from 'react-router'

function Employee() {
  const { state } = useLocation();
  
  return (
    <div className='m-auto mt-8 w-full max-w-2xl p-6 sm:p-8'>
      <div className='box-border rounded-lg border border-gray-200 bg-[#FEF8DF] p-8 shadow-lg text-[#103510]'>
        <h2 className='mb-6 text-2xl font-bold sm:text-3xl'>Employee Details</h2>
        
        <div className='space-y-4'>
          <div className='flex flex-col sm:flex-row sm:items-center gap-2 border-b border-gray-100 pb-4'>
            <span className='font-semibold text-base w-32'>Name:</span>
            <span className='text-base'>{state.name}</span>
          </div>
          
          <div className='flex flex-col sm:flex-row sm:items-center gap-2 border-b border-gray-100 pb-4'>
            <span className='font-semibold text-base w-32'>Email:</span>
            <span className='text-base break-all'>{state.email}</span>
          </div>
          
          <div className='flex flex-col sm:flex-row sm:items-center gap-2 border-b border-gray-100 pb-4'>
            <span className='font-semibold text-base w-32'>Mobile:</span>
            <span className='text-base'>{state.mobile}</span>
          </div>
          
          <div className='flex flex-col sm:flex-row sm:items-center gap-2 border-b border-gray-100 pb-4'>
            <span className='font-semibold text-base w-32'>Designation:</span>
            <span className='text-base'>{state.designation}</span>
          </div>
          
          <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
            <span className='font-semibold text-base w-32'>Company:</span>
            <span className='text-base'>{state.companyName}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employee