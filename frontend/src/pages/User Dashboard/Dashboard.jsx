import { useState } from 'react'

import './Dashboard.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

function Dashboard() {
  const [openSidebarToggle, setSidebarToggle] = useState(false);

  const OpenSidebar = () =>[
    setSidebarToggle(!openSidebarToggle)
  ]


  return (
  <div className='grid-container'>
    <Header OpenSidebar = {OpenSidebar} />
    <Sidebar openSidebarToggle = {openSidebarToggle}  OpenSidebar = {OpenSidebar} />
    <Home />
  </div>
  )
}

export default Dashboard
