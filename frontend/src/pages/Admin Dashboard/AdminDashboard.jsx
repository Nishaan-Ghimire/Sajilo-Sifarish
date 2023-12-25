import { useState } from 'react'
import './AdminDashboard.css'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminHome from './AdminHome'
import AdminStatus from './AdminStatus'


function AdminDashboard() {
  const [openSidebarToggle, setSidebarToggle] = useState(false);

  const OpenSidebar = () =>[
    setSidebarToggle(!openSidebarToggle)
  ]


  return (
  <div className='grid-container'>
    <AdminHeader OpenSidebar = {OpenSidebar} />
    <AdminSidebar openSidebarToggle = {openSidebarToggle}  OpenSidebar = {OpenSidebar} />
    <AdminHome />
    {/* <AdminStatus /> */}
  </div>
  )
}

export default AdminDashboard
