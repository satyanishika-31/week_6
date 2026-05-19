import { useContext } from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import { NavLink } from 'react-router-dom'
import img_1 from '../assets/businessman.png'
import img_2 from '../assets/businessman_add.png'
import img_3 from '../assets/edit.png'
import img_4 from '../assets/search.png'

function Home() {
  const { counter, changeCounter } = useContext(counterContextObj);
  return (
    

      <div className='min-h-[calc(100vh-4rem)] w-full mb-10 overflow-hidden'>
        <div className="flex w-full items-center justify-center gap-50 px-4 py-12 sm:px-8 lg:py-40 bg-[#fef3c68e]">
          <p className="font-bold font-serif text-4xl sm:text-5xl italic text-[#103510]">
            WELCOME!
          </p>
          <p className='max-w-3xl font-normal font-serif italic text-base sm:text-lg leading-relaxed text-[#103510]'>"Empower Your Workforce with a smarter way to manage employee information — seamlessly add new team members, update existing records, and delete outdated details, all in one powerful platform designed to simplify management, boost productivity, and give you complete confidence in handling your organization’s data." </p>
        </div>
        <p className='mt-3 p-3 text-xl font-bold text-[#103510] sm:text-2xl'>We Provide Employee Data Management</p>
        <div className='mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4'>
          <div className='group relative box-border shadow-2xl shadow-[#fffff0] overflow-hidden bg-[#FEF8DF] p-10 ml-5 text-center transition duration-300 hover:-translate-y-1'>
            <img src={img_2} alt="Add employees" className='mx-auto h-28 w-28 object-contain transition duration-300 group-hover:scale-105 sm:h-32 sm:w-32' />
            <p className='mb-4 text-lg font-semibold italic sm:text-xl'>Add Employees</p>
            <NavLink to="createemp" className="inline-flex w-full items-center justify-center rounded-full border px-4 py-3 text-sm font-semibold transition duration-300 sm:text-base">
              Create Employee
            </NavLink>
          </div>
          <div className='group relative box-border overflow-hidden shadow-[#fffff0] shadow-2xl bg-[#FEF8DF] p-10 text-center transition duration-300 hover:-translate-y-1'>
            <img src={img_1} alt="Delete employees" className='mx-auto h-28 w-28 object-contain transition duration-300 group-hover:scale-105 sm:h-32 sm:w-32' />
            <p className='mb-4 text-lg font-semibold italic sm:text-xl'>Delete Employees</p>
            <NavLink to="listofemp" className="inline-flex w-full items-center justify-center rounded-full border px-4 py-3 text-sm font-semibold transition duration-300 sm:text-base">Delete Employees</NavLink>
          </div>
          <div className='group relative box-border overflow-hidden p-10 text-center shadow-[#fffff0] shadow-2xl bg-[#FEF8DF] ransition duration-300 hover:-translate-y-1'>
            <img src={img_3} alt="Edit employees" className='mx-auto h-28 w-28 object-contain transition duration-300 group-hover:scale-105 sm:h-32 sm:w-32' />
            <p className='mb-4 text-lg font-semibold italic sm:text-xl'>Edit Employees</p>
            <NavLink to="listofemp" className="inline-flex w-full items-center justify-center rounded-full border px-4 py-3 text-sm font-semibold transition duration-300 sm:text-base">Edit Employees</NavLink>
          </div>
          <div className='group relative box-border overflow-hidden shadow-[#fffff0] shadow-2xl bg-[#FEF8DF] mr-5                                    p-11 text-center transition duration-300 hover:-translate-y-1'>
            <img src={img_4} alt="View employees" className='mx-auto h-28 w-28 object-contain transition duration-300 group-hover:scale-105 sm:h-32 sm:w-32' />
            <p className='mb-4 text-lg font-semibold italic sm:text-xl'>View Employees</p>
            <NavLink to="listofemp" className="inline-flex w-full items-center justify-center rounded-full border px-4 py-3 text-sm font-semibold transition duration-300 sm:text-base">View Employees</NavLink>
          </div>
        </div>


        <div className='mt-8 flex flex-col items-center gap-2 mr-5 ml-5 border p-6 text-center rounded-full sm:flex-row sm:justify-between sm:text-left'>
          <h1 className='text-base font-semibold tracking-wide sm:text-lg'>counter : {counter}</h1>
          <button onClick={changeCounter} className="rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600 hover:scale-[1.03] sm:text-base">Increment</button>
        </div>
      </div>

    
  )
}

export default Home
