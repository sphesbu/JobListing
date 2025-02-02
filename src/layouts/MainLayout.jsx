import React from 'react'
import { Outlet } from 'react-router-dom'
import Navmenu from '../componets/Navmenu'
import ViewAllJobs from '../componets/ViewAllJobs'

function MainLayout() {
  return (
    <>
    <Navmenu />
    <Outlet />
    <ViewAllJobs />
    </>
  )
}

export default MainLayout