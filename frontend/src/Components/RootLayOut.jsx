import Header from './Header'
import { Outlet } from 'react-router'


function RootLayOut() {
  return (
    <div>
        <Header/>
        <div className='min-h-screen'>

        <Outlet/>
        </div>
        
    </div>
  )
}

export default RootLayOut