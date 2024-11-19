import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Form.css"


const ViewUsers = () => {
const [user,setuser]=useState([])

useEffect(() => {
  GetUser()

}, [])

  const GetUser=()=>{
  try {
    const response=axios
      .get("http://localhost:5000/api/v1/GetAllRegisteration")
      .then(res =>setuser(res.data) )
      .catch(err => console.error(err));
  } catch (error) {
    console.log(error)
  }
}
return (
<>

<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Avator</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>

    </tr>
  </thead>
  <tbody>
  {
  user.map((users)=>(
    <tr key={users.id}>

    <td>{users._id} </td>
    <td>
    <img  className='table-img' src={users.avator}  />

    </td>
    <td>{users.name}</td>
    <td>{users.lastname}</td>
    <td>{users.email}</td>
    <td>{users.username}</td>
  </tr>
  ))
}
 
 
  </tbody>
</table>



</>
)
}

export default ViewUsers