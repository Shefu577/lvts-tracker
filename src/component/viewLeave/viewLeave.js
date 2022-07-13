import React, {useEffect, useState } from 'react';
import Header from '../layout/Header/Header';
import {useNavigate} from 'react-router-dom';



const ViewLeave= () => {
  let history = useNavigate();

const [leaves,setleaves] = useState()
  const getleaves = async() =>{
    let res = await fetch("http://localhost:5000/leaveapi/getleaves", {method:"GET"})
       
    res = await res.json()
    //console.log(res.message)
    setleaves(res.message)

  }

  useEffect(() => {
    getleaves();
  },[])

  const changehandle=async (e,id,email) =>{
    
    let res = await fetch("http://localhost:5000/leaveapi/statusupdate", {method:"PUT", body: JSON.stringify({id, status: e.target.value,email}),
     headers: {
       "content-type" : "application/json"
     }
  })
       
    res = await res.json()
    getleaves()
  }
  const logout = () =>{
    alert("Redirecting back to Login Form !!")
    history("/login1");
  }

    
    return (
        <div>
          <Header/>
          <br/>
          <div className = "d-flex justify-content-between px-2">
          <h3 >ALL LEAVES</h3>
          <h6 onClick={logout}>Logout</h6>
          </div>
          

           <br/>
          <table class="table" >
  <thead class="table-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Contact</th>
      <th scope="col">LeaveType</th>
      <th scope="col">Start date</th>
      <th scope="col">End date</th>
      <th scope="col">Status</th>
      <th scope="col">Days</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {leaves? 
    leaves.map((leave, index) => {
     return <tr>
        <td>
          {index+1}
        </td>
        <td>
          {leave.name}
        </td>
        <td>
          {leave.email}
        </td>
        <td>
          {leave.address}
        </td>
        <td>
          {leave.contact}
        </td>
        <td>
          {leave.typeleave}
        </td>
        <td>
          {leave.startdate.substring(0, 10)}
        </td>
        <td>
          {leave.enddate.substring(0, 10)}
        </td>
        <td>
          {leave.status}
        </td>
        <td>
          {leave.days}
        </td>
        <td>
          <select onChange={e => changehandle(e, leave._id,leave.email)}>
            <option value="accept">Accept</option>
            <option value="reject">Reject</option>
          </select>
        
        </td>

      </tr>
    })
    :null}
  </tbody>
</table>

        </div>
    )
}

export default ViewLeave