import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

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
      let res=await axios.delete(`http://localhost:4000/emp/emp/${id}`)
      if(res.status === 200){
        getEmps();
      }
    };

    async function getEmps() {
      let res = await fetch("http://localhost:4000/emp/emp")
      if (res.status === 200) {
        let resObj = await res.json()
        setEmps(resObj.payload)
      }
    }

    useEffect(() => {
      getEmps()
    }, [])
    return (
      <div>
        <h1 className="text-4xl text-center  font-bold font-serif p-6">List of Employees</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {
            emps.map((empObj) => (
              <div key={empObj._id} className="bg-mauve-300 m-12 p-5 w-full h-auto rounded-2xl gap-20 text-center 
              transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <p>{empObj.name}</p>
                <p>{empObj.email}</p>
                <p>{empObj.designation}</p>
                {/* 3 buttons button -1 */}
                <div className="flex  justify-around  gap-4 ">
                  <button className="bg-mauve-100 p-2 rounded-2xl " onClick={() => gotoemploye(empObj)} > View</button>
                  <button className="bg-mauve-200 p-2 rounded-2xl " onClick={() =>deleteEmployBYId(empObj._id)}  >Delete</button>
                  <button className="bg-mauve-100 p-2 rounded-2xl " onClick={() => goteditemploye(empObj)}  >Edit</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }

export default ListOfEmps