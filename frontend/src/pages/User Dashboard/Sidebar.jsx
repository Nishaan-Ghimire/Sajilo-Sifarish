import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsPersonCircle,BsInfoCircle}
 from 'react-icons/bs'
 import { Link } from 'react-router-dom'


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id='sidebar' className={openSidebarToggle ?  "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
                <Link to="/user-home">
                <div className="flex items-center">
                <BsPersonCircle className='icon_header'/><div className="title ml-2">Username</div>
                </div>
                </Link>   
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

    
    <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
                <Link to="/user-apply-sifaris" className='sidebarListside'>
                <div className="flex items-center">
                    <BsGrid1X2Fill className='icon' /> <div className="title ml-2">Apply Sifarish</div>
                  </div>
                </Link>
        </li>
        <li className='sidebar-list-item'>
                <Link to="/user-status" className='sidebarListside'>
                  <div className="flex items-center">
                    <BsInfoCircle className='icon' /> <div className="title ml-2 mt-1">Status</div>
                    </div>
                </Link>
        </li>
        <li className='sidebar-list-item'>
                <a href="" className='sidebarListside'>
                    <BsFillGearFill className='icon' /> <div className="title ml-2">Settings</div>
                </a>
        </li>
    </ul>
    


    </aside>
  )
}

export default Sidebar
