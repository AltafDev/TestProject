import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import Form from "react-bootstrap/Form";
const Register = () => {
const [name,setname]=useState("")
const [lastname,setlastname]=useState("")
const [email,setemail]=useState("")
const [username,setusername]=useState("")
const [avator,setavator]=useState("")
const [Gender,setGender]=useState("")


const SubmitHandler=(e)=>{
  e.preventDefault()
  const input=document.getElementById("input")
  const button=document.getElementById("submit")
  button.addEventListener("click",()=>{
    input.value=""
  })
console.log(`${name}${lastname}${email}${username}${avator}${Gender}`)
   
try {
  axios
       .post("http://localhost:5000/api/v1/Registeration",{
        name,lastname,email,username,avator,Gender
       })
       .then(res => console.log(res.data))
       .catch(err => console.error(err));
 } catch (error) {
     console.log(error)
 }
}

  return (
    <>
      <div className="Register-bg">
        <form  className="Register-form">
          <div className="Register-form-content">
            <h1 className="Register-head"> Registeration form</h1>
            <label className="Register-label">First Name</label>
            <input id="input" onChange={(e)=>setname(e.target.value)} className="Register-input" type="text" />

            <label className="Register-label">Last Name</label>
            <input id="input" onChange={(e)=>setlastname(e.target.value)} className="Register-input" type="text" />

            <label className="Register-label">Email</label>
            <input id="input" onChange={(e)=>setemail(e.target.value)} className="Register-input" type="text" />

            <label className="Register-label">Username</label>
            <input id="input" onChange={(e)=>setusername(e.target.value)} className="Register-input" type="text" />

            <label className="Register-label">Avator</label>
            <input id="input" onChange={(e)=>setavator(e.target.value)} className="Register-input" type="text" />
            <label className="Register-label"> Gender</label>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check 
                  inline
                  label="Male"
                  name="group1"
                  type={type}
                  value={"Man"}
                  onChange={(e)=>setGender(e.target.value)}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="group1"
                  type={type}
                  value={"Female"}
                  onChange={(e)=>setGender(e.target.value)}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}

            
            <div className="Register-btn">
              <button onSubmit={SubmitHandler} id="submit" type="click" >Send</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
