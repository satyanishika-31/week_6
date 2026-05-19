import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://week-6-2-n1un.onrender.com'

  function ListOfEmps() {

    const [emps, setEmps] = useState([])
    const navigate = useNavigate()

    const gotoemploye = (empObj) => {
      navigate("/employee", { state: empObj });
    };
    const goteditemploye = (empObj) => {
      navigate("/editemploye", { state: empObj })
    }
    const deleteEmployBYId=async (id)=>{
      try{
        let res=await axios.delete(`${API_BASE_URL}/emp/emp/${id}`)
        if(res.status === 200){
          getEmps();
        }
      }catch(err){
        console.error(err)
        alert(err.response?.data?.error || err.message || 'Delete failed')
      }
    };

    async function getEmps() {
      try{
        let res = await fetch(`${API_BASE_URL}/emp/emp`)
        if (res.status === 200) {
          let resObj = await res.json()
          setEmps(resObj.payload)
        } else {
          let errRes = await res.json()
          throw new Error(errRes.error ? `${errRes.message}: ${errRes.error}` : errRes.message || 'Failed to fetch')
        }
      }catch(err){
        console.error(err)
        alert(err.message)
      }
    }

    useEffect(() => {
      getEmps()
    }, [])
    return (
      <div className='px-4 py-8 sm:px-6 lg:px-10'>
        <h1 className='mb-8 text-center text-2xl font-bold sm:text-3xl text-[#103510]'>List of Employees</h1>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {emps.map((empObj) => (
            <div
              key={empObj._id}
              className='rounded-lg border border-gray-200 bg-[#FEF8DF] p-6 text-[#103510] transition duration-300 hover:-translate-y-2 hover:shadow-lg'
            >
              <div className='mb-4 space-y-2'>
                <p className='text-lg font-semibold'>{empObj.name}</p>
                <p className='text-sm text-gray-600 break-all'>{empObj.email}</p>
                <p className='text-sm font-medium'>{empObj.designation}</p>
              </div>
              
              <div className='flex gap-2'>
                <button
                  className='flex-1 rounded px-3 py-2 text-sm font-semibold bg-[#103510] text-white transition hover:bg-[#0d2708]'
                  onClick={() => gotoemploye(empObj)}
                >
                  View
                </button>
                <button
                  className='flex-1 rounded px-3 py-2 text-sm font-semibold bg-red-500 text-white transition hover:bg-red-600'
                  onClick={() => deleteEmployBYId(empObj._id)}
                >
                  Delete
                </button>
                <button
                  className='flex-1 rounded px-3 py-2 text-sm font-semibold bg-blue-500 text-white transition hover:bg-blue-600'
                  onClick={() => goteditemploye(empObj)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

export default ListOfEmps