import './AdminDashboard.css'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminHome from './AdminHome'



function AdminDashboard() {

  return (
  <div className='grid-container'>
   
    <AdminHeader/>
    <AdminSidebar/>
    <AdminHome/>



  </div>
  )
}

export default AdminDashboard
