import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsPersonCircle,BsInfoCircle,BsFileEarmarkArrowUp   }
 from 'react-icons/bs'
import AdminHome from './AdminHome'
import { Link } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import './AdminDashboard.css'


function AdminSidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <>
 
    <aside id='sidebar' className={openSidebarToggle ?  "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
                {/* <BsCart3 className='icson_header' />  */}
                <Link to="/admin-home">
                <div className="flex items-center">
                <BsPersonCircle className='icon_header' />
                <div className="title ml-2">Admin</div>
                </div>
                {/* <BsPersonCircle className='icon_header'/><div className="title ml-2">Admin</div> */}
                </Link>
                
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

    
    <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
                <Link to="/admin-check-application-request" className='sidebarListside'>
                    <BsFileEarmarkArrowUp    className='icon' /> <div className="title ml-2">Application Requests</div>
                    
                </Link>

                {/* <Link to="/"className='sidelink'>

                  <DashboardIcon className='icon'/>
                  <span>Dashboard</span>
                           </Link> */}


        </li>
        <li className='sidebar-list-item'>
                <Link to="/admin-status" className='sidebarListside'>
                    <BsInfoCircle className='icon' /> <div className="title ml-2">Status</div>
                    {/* IoInformationCircleOutline */}
                </Link>
        </li>
        <li className='sidebar-list-item'>
                <a href="" className='sidebarListside'>
                    <BsFillGearFill className='icon' /> <div className="title ml-2">Settings</div>
                </a>
        </li>
    </ul>
    


    </aside>
    </>
  )
}

export default AdminSidebar
