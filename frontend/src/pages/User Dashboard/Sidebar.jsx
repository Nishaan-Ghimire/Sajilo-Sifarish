import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsPersonCircle}
 from 'react-icons/bs'


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id='sidebar' className={openSidebarToggle ?  "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
                {/* <BsCart3 className='icson_header' />  */}
                <BsPersonCircle className='icon_header'/><div className="title ml-2">Username</div>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

    
    <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
                <a href="" className='sidebarListside'>
                    <BsGrid1X2Fill className='icon' /> <div className="title ml-2">Apply Sifarish</div>
                </a>
        </li>
        <li className='sidebar-list-item'>
                <a href="" className='sidebarListside'>
                    <BsFillArchiveFill className='icon' /> <div className="title ml-2">Products</div>
                </a>
        </li>
        <li className='sidebar-list-item'>
                <a href="" className='sidebarListside'>
                    <BsFillGrid3X3GapFill className='icon' /> <div className="title ml-2">Categories</div>
                </a>
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
