import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsPersonCircle,BsInfoCircle}
 from 'react-icons/bs'
//  import { Link } from 'react-router-dom'
 import { Link } from 'react-router-dom'
//  const { basename } = React.useContext(SomeContext);
// 


 function Sidebar({openSidebarToggle, OpenSidebar}) {
// function Sidebar() {
  return (
    <aside id='sidebar' className="sidebar-responsive">
     {/* <aside id='sidebar' className={"sidebar-responsive"}> */}
       <div className='sidebar-title'>
         <div className='sidebar-brand'>
                 <a href={"/user-home"} className="errorlink">
                 <div className="flex items-center">
                 <BsPersonCircle className='icon_header'/>
                 <div className="title ml-2">Username</div>
                 </div>
                 </a>   
         </div>
         {/* <span className='icon close_icon'>X</span> */}
       </div>

   
     <ul className='sidebar-list'>
         <li className='sidebar-list-item'>
                 <a href="/user-home" className='sidebarListside'>
                 <div className="flex items-center">
                     <BsGrid1X2Fill className='icon' /> <div className="title ml-2">Apply Sifarish</div>
                   </div>
                 </a>
         </li>
         <li className='sidebar-list-item'>
                 <a href="/user-status" className='sidebarListside'>
                   <div className="flex items-center">
                     <BsInfoCircle className='icon' /> <div className="title ml-2 mt-1">Status</div>
                     </div>
                 </a>
         </li>
         <li className='sidebar-list-item'>
                 <a href="" className='sidebarListside'>
                     <BsFillGearFill className='icon' /> <div className="title ml-2">Settings</div>
                 </a>
         </li>
     </ul> 
     

{/* <h1>Hello side bar</h1> */}
    </aside>
  )
}


export default Sidebar;
