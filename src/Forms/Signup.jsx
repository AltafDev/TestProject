 import  {React, useState } from 'react'
 import axios from 'axios'
 import "./Form.css"
 import { Link } from 'react-router-dom'
 const Signup = () => {


    const [tab,settab]=useState(1)
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [confirm,setconfirm]=useState("")
    
    const Submit=(e)=>{
        e.preventDefault()
        console.log(`${email}${password}${confirm}`)
        
    
    
    try {
     axios
          .post("http://localhost:5000/api/v1/Register",{
            email,password,confirm
          })
          .then(res =>{
            alert("you are signed in. Kindly login your account")
            console.log(res.data)
          })
          .catch(err =>{
            alert("Something went wrong please check again")
            console.error(err)
          });
    } catch (error) {
        alert("Something went wrong please check again")
        console.log(error)
    }
    
    
    
    
    }


    const Login=(e)=>{
        e.preventDefault()
        console.log(`${email}${password}`)
     try {
        axios
        .post("http://localhost:5000/api/v1/login",{
          email,password}
        )
        .then(res => console.log(res.data))
        .catch(err =>{
            alert("Something went wrong please check again")
            console.error(err)});
     } catch (error) {
        console.log(error)
     }
           
        
    }


        

    
  
return (



<>
<div className="form-bg">
{
    tab === 1 ? <>
    <form onSubmit={Submit} className='SignupForm'>
        <h1 className='form-head'>Signup Form</h1>
    <div className="form-btns">
    <button onClick={()=>{settab(1)}} >Signup</button>
        <button onClick={()=>{settab(2)}}>Login</button>
    </div>
 

<div className="form-routes">

<input onChange={(e)=>setemail(e.target.value)} className='signup-input' type="email" placeholder='Email Adress' />

<input onChange={(e)=>setpassword(e.target.value)} className='signup-input' type="password" placeholder='Password' />

<input onChange={(e)=>setconfirm(e.target.value)} className='signup-input' type="password" placeholder='Confirm Password' />

<button type='submit'  className='signup'>Signup</button>

</div>
  
  
    </form>

 </>:null
 }
 
  {
    tab===2?<>
    <form  onSubmit={Login} className='SignupForm'>
        <h1 className='form-head'>Login Form</h1>
    <div className="form-btns">
     <button onClick={()=>{settab(1)}} >Signup</button>
     
    <button >Login</button>
    </div>
<div className="form-routes">

<input  onChange={(e)=>setemail(e.target.value)} className='signup-input' type="email" placeholder=' Adress' />

<input  onChange={(e)=>setpassword(e.target.value)}  className='signup-input' type="password" placeholder='Password' />

<Link>Forget Password</Link>
<button type='submit' className='signup'>Login</button>

</div>
    </form>
</>:null}

</div>
</>

)
 }
 
 export default Signup