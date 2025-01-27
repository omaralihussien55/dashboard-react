import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <div>header</div>
      <Outlet />
      <div>
        footer
      </div>
    </div>
  )
}

export default RootLayout
