import React, { useState } from 'react';
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';
import {useNavigate } from 'react-router-dom';
import "../App.css";

import welcome from "../Assessts/Welcome.jpg";

const Adminpage = () => {

  const[name,Setname]=useState('');
  const[password,Setpassword]=useState('');
  const navigate=useNavigate();



  const logincheck=(e)=>{
    e.preventDefault();

    if(name=== "Director" && password === "Director1319"){

      navigate('/99mandiadmindashboard')
    }

    else{
      alert("Invalid Username & Password");
      Setname("");
      Setpassword("");
    }
  }


    

  return (
    <div className='container-fluid p-0'>

        
               <div className='bread p-0'>
                     <CBreadcrumb>
                     <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
                     <CBreadcrumbItem active>Adminpage</CBreadcrumbItem>
                    </CBreadcrumb>
                     </div>

<div className='container'>
    <div className='row'>
        <div className='col-md-4'>
        <div className='p-2'>
<h3 className='p-2'>HR Login</h3>

        <form onSubmit={logincheck}>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" Enter Name" value={name} onChange={(e)=>Setname(e.target.value)}/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Password" value={password} onChange={(e)=>Setpassword(e.target.value)}/>
</div>

<button className='btn btn-outline-warning' type='submit' >Submit</button>
            
        </form>


        </div>

        </div>

        <div className='col-md-6 imagesections'>
            <img src={welcome} alt="welcomepage"/>

        </div>
    </div>
</div>

    </div>
  )
}

export default Adminpage