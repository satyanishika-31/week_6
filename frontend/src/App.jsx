import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayOut from './Components/RootLayOut'
import Home from './Components/Home'
import CreateEmp from './Components/CreateEmp'
import ListOfEmp from './Components/ListOfEmp'
import Employee from './Components/Employee'
import EditEmployee from './Components/EditEmployee'

function App() {
  const routerobj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "createemp",
          element: <CreateEmp/>
        },
        {
          path: "listofemp",
          element:<ListOfEmp/>
        },
        {
          path:"employee",
          element:<Employee/>
        },{
          path:"editemploye",
          element:<EditEmployee/>

        }
      ],
    },


  ])

  return (
    <RouterProvider router={routerobj}/>
  )
}

export default App