import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Dashboard.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Status from './Status';

function Dashboard() {
  const [openSidebarToggle, setSidebarToggle] = useState(false);

  const OpenSidebar = () =>[
    setSidebarToggle(!openSidebarToggle)
  ]


  return (
  <div className='grid-container'>
    {/* <Header OpenSidebar = {OpenSidebar} />
    <Sidebar openSidebarToggle = {openSidebarToggle}  OpenSidebar = {OpenSidebar} />
    <Home /> */}

    <Router>
      <Routes>
        
        <Route exact path="/user-home" element={ <> <Header OpenSidebar = {OpenSidebar} />
        <Sidebar openSidebarToggle = {openSidebarToggle}  OpenSidebar = {OpenSidebar} />  </> } />

        <Route exact path="/user-apply-sifaris" element={ <><Header OpenSidebar = {OpenSidebar} />
        <Sidebar openSidebarToggle = {openSidebarToggle}  OpenSidebar = {OpenSidebar} /> <Home/> </> } />

        <Route exact path="/user-status" element={ <><Header OpenSidebar = {OpenSidebar} />
        <Sidebar openSidebarToggle = {openSidebarToggle}  OpenSidebar = {OpenSidebar} /> <Status/> </> } />

      </Routes>
    </Router>


  </div>
  )
}

export default Dashboard
