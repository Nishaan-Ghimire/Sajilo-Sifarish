import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LineChart, Line } from 'recharts';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,  BsFillBellFill, BsExclamationCircle }
 from 'react-icons/bs'
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';


function AdminHome() {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];


  return (
    <>
    <main className='main-container'>
    <div className='text-center mt-8'>
      <h1 className='text-slate-900 text-3xl font-bold'>Application Requests</h1>
    </div>     

    <div className="flex justify-end space-x-4 mt-3">
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        Decline
      </button>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        Accept
      </button>
    </div>

    {/* <div>
    <div className="sifarisCard" style={{width: 200}}>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
    </div>
    </div>
         */}

<div className="card mt-4" style={{width: 250, height:250}}>
  <div className="card-body">
    <h5 className="card-title font-bold text-xl text-center font-sans">Card title</h5>
    <hr />
    
    
    <div class="container flex flex-col gap-4">
    <span className='font-bold pt-1'>Name : </span>
    <span className='font-bold pt-1'>Age : </span>
    <span className='font-bold pt-1'>Address : </span>
    <span className='font-bold pt-1'>Phone No. : </span>
</div>

  </div>
</div>




        {/* <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>


        </div> */}

    </main>
    </>
  )
}

export default AdminHome
