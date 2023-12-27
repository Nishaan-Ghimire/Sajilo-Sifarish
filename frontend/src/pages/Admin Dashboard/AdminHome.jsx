import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LineChart, Line } from 'recharts';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,  BsFillBellFill, BsExclamationCircle }
 from 'react-icons/bs'
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import './admin.css'


function AdminHome() {

  return (
    <>
    <main className='main-container'>
    <div className='text-center mt-8'>
      <h1 className='text-slate-900 text-3xl font-bold'>Application Requests</h1>
    </div>     

    
<div class="sifarish-request">
  <a href="/sifarishdemo">
        <div className="card mt-4" style={{width: 300, height:300}}>
          <div className="card-body">
            <h5 className="card-title font-bold text-xl text-center font-sans">Card title</h5>
            <hr />
            
            
            <div class="container flex flex-col gap-4">
            <span className='font-bold pt-1'>Name : Nishan Ghimire</span>
            <span className='font-bold pt-1'>Age : 21</span>
            <span className='font-bold pt-1'>Address : Koteshwor Kathmandu </span>
            <span className='font-bold pt-1'>Phone No. : 9862661955</span>
        </div>
        <div className="flex justify-end space-x-4 mt-3">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Decline
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Accept
              </button>
            </div>
          </div>
        </div>


</a>
        

</div>



    </main>
    </>
  )
}

export default AdminHome
