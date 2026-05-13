import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

const API_BASE_URL = ''

function CreateEmp() {

  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
  const navigate=useNavigate()

  const {register,handleSubmit,formState:{errors}}=useForm()

  //form submit
  const onFormSubmit=async (newEmpObj) => {
    console.log(newEmpObj)
    try{
      setLoading(true)
    //make HTTP POST req
    let res= await fetch(`${API_BASE_URL}/emp/emp`,
    {
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(newEmpObj)
    })

    if(res.status===201){
      //navigate to employees component programatically
      navigate("/listofemp")
    }
    else{
      let errorRes=await res.json()
      const serverMsg = errorRes.message || "Something went wrong"
      const serverErr = errorRes.error ? `: ${errorRes.error}` : ''
      throw new Error(serverMsg + serverErr)
    }

  }catch(err){
    //deal with error
    setError(err)
  }
   finally{
    setLoading(false)
   }
  }

  if(loading)
    return <p className='text-center text-4xl'>Loading...</p>
  if(error)
    return <p className='text-red-500 text-4xl text-center'>{error.message}</p>
  
  return (
    <div className='box-border   m-auto  p-16 '>
      <h1 className='text-5xl text-center font-bold font-serif text-[#103510] '>Create New Employee</h1>
      {/* form */}
      <form className='w-full max-w-md mx-auto p-5  ' onSubmit={handleSubmit(onFormSubmit)}>
        <input type='text' placeholder='Enter Name' {...register("name")} id='' className='mb-3 bg-white border p-3 w-full rounded-2xl' /> 
        <input type='email' placeholder='Enter Email' {...register("email")} id='' className='mb-3 bg-white border p-3 w-full rounded-2xl' /> 
        <input type='tel' placeholder='Enter Mobile Number' {...register("mobile")} id='' className='mb-3 bg-white border p-3 w-full rounded-2xl' /> 
        <input type='text' placeholder='Enter Designation' {...register("designation")} id='' className='mb-3 bg-white border p-3 w-full rounded-2xl' /> 
        <input type='text' placeholder='Enter Company Name' {...register("companyName")} id='' className='mb-3 bg-white border p-3 w-full rounded-2xl' />
        <button type='submit' className='mb-3 border rounded-2xl p-3 block mx-auto bg-[#103510]  text-amber-300'>Add Emp</button> 
      </form>
    </div>
  )
}

export default CreateEmp