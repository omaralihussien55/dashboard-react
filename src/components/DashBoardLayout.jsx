import React from 'react'
import NavBar from './bars/Navbar'
import SideBar from './bars/SideBar'
import Main from './Main'
import { Outlet } from 'react-router-dom'

const DashBoardLayout = () => {
  return (
    <div>
         <NavBar />
         <div className='flex gap-3'>
        <SideBar /> 
        <Main> 
            <div  className="">
            <Outlet />
            </div>
       </Main> 
       </div>
    </div>
  )
}

export default DashBoardLayout
