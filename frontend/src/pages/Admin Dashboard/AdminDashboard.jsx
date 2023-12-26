import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
    {/* <AdminHeader OpenSidebar = {OpenSidebar} />
    <AdminSidebar openSidebarToggle = {openSidebarToggle}  OpenSidebar = {OpenSidebar} />
    <AdminHome /> */}
    {/* <AdminStatus /> */}

    <Router>
    
      {/* <AdminSidebar />
      <AdminHeader/> */}
        <Routes>
        <Route exact path="/admin-home" element={ <><AdminSidebar openSidebarToggle = {openSidebarToggle}  OpenSidebar = {OpenSidebar} /> <AdminHeader OpenSidebar = {OpenSidebar} />
        </> }/>

        <Route exact path="/admin-check-application-request" element={ <> <AdminSidebar openSidebarToggle = {openSidebarToggle}  OpenSidebar = {OpenSidebar} />  <AdminHeader OpenSidebar = {OpenSidebar} />
        <AdminHome/>   </> } />

        <Route exact path="/admin-status" element={ <> <AdminSidebar openSidebarToggle = {openSidebarToggle}  OpenSidebar = {OpenSidebar} /> <AdminHeader OpenSidebar = {OpenSidebar} />
          <AdminStatus/>  </> }/>

          {/* <Route exact path="/" element={ <> <AdminSidebar />
          <AdminHeader/>  </> }/> */}
        </Routes>
      
    </Router>

  </div>
  )
}

export default AdminDashboard
