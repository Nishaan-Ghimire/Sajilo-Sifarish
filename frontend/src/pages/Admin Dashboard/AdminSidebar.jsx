import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsPersonCircle,BsInfoCircle,BsFileEarmarkArrowUp   }
 from 'react-icons/bs'


function AdminSidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id='sidebar' className={openSidebarToggle ?  "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
                {/* <BsCart3 className='icson_header' />  */}
                <BsPersonCircle className='icon_header'/><div className="title ml-2">Admin</div>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

    
    <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
                <a href="" className='sidebarListside'>
                    {/* <BsGrid1X2Fill className='icon' /> <div className="title ml-2">Apply Sifarish</div> */}
                    <BsFileEarmarkArrowUp    className='icon' /> <div className="title ml-2">Application Requests</div>
                </a>
        </li>
        <li className='sidebar-list-item'>
                <a href="" className='sidebarListside'>
                    <BsInfoCircle className='icon' /> <div className="title ml-2">Status</div>
                    {/* IoInformationCircleOutline */}
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

export default AdminSidebar
