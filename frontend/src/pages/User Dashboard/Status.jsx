import React from 'react'
import './Dashboard.css'

function Status() {
  return (
    <>
    <div className='tablemain'>
 <div className="table-container">
      <table border={1} className="data-table">
      <thead className="table-dark">
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Sifaris type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>

    </div>
    </>
  )
}

export default Status;

