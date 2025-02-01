import React, { useState } from 'react';
import axios from 'axios';
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';
import location from "./Assessts/location.png";
import mobile from "./Assessts/mobile.png";
import email from "./Assessts/email.png";
import {FloatingWhatsApp} from 'react-floating-whatsapp'

const Contactus = () => {

  const[firstname,Setfirstname]=useState('');
  const[lastname,Setlastname]=useState('');
  const[mail,Setmail]=useState('');
  const[mobilenumber,Setmobilenumber]=useState('');
  const[message,Setmessage]=useState('');

  const mobilevalidation = /^\d{10}$/;
  const emailvalidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const handleChange=(e)=>{

    e.preventDefault();

    if(firstname.length===0){

      alert("First name should not be Empty");

    }
    else if(lastname.length===0){

      alert("Last name should not be Empty");
    }

    else if(!emailvalidation.test(mail)){
      alert("EMail should  be Vaild");
    }

    else if(mobilenumber.length === 0){
      alert("Mobile Number should not be Empty");
    }

   else if(!mobilevalidation.test(mobilenumber)){
    alert("Mobile Number should be 10 Digits Only");
   }

    else if(message.length===0){
      alert("please Enter Message");
    }

    else{
      axios.post("https://vings-43c54-default-rtdb.firebaseio.com/Contacts.json",{firstname,lastname,mobilenumber,mail,message})
      .then(()=>{

        alert("Data Posted Successfully");
        Setfirstname("");
        Setlastname("");
        Setmail("");
        Setmobilenumber("");
        Setmessage("");

      })

      .catch((err)=>{

        console.log(err);
      })
    }

    
  }
  

  return (
    <div className='container-fluid p-0'>

    <div className='bread p-0'>
     
       <CBreadcrumb>
       <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
       <CBreadcrumbItem >ContactUs</CBreadcrumbItem>
      </CBreadcrumb>
       </div>

       <h2 className='textheader p-2'>Reachus for any Queries</h2>
       <div className='underline p-0 '></div>
       <div className='underline1 py-1'></div>

<div className='container contactform '>
    <div className='row'>
    <h4>Enquiry Form</h4>
        <div className='col-md-7  tableform'>
       <form onSubmit={handleChange}>
       <div class="row g-2 my-2">
       <div class="col-md">
       <div class="form">
       <label for="floatingInputGrid">First Name</label>
      <input type="text" class="form-control" id="floatingInputGrid" placeholder="Enter First Name" value={firstname} onChange={(e)=>Setfirstname(e.target.value)} />
      
    </div>
  </div>
  <div class="col-md">
    <div class="form">
    <label for="floatingInputGrid">Last Name</label>
    <input type="text" class="form-control" id="floatingInputGrid" placeholder="Enter Last Name" value={lastname} onChange={(e)=>Setlastname(e.target.value)} />
    </div>
  </div>
</div>

<div class="row g-2 ">
  <div class="col-md">
    <div class="form">
    <label for="floatingInputGrid">Mail ID</label>
      <input type="mail" class="form-control" id="floatingInputGrid" placeholder="Enter Mail ID" value={mail} onChange={(e)=>Setmail(e.target.value)} />
     
    </div>
  </div>
  <div class="col-md">
    <div class="form">
    <label for="floatingInputGrid">Mobile Number</label>
    <input type="text" class="form-control" id="floatingInputGrid" placeholder="Enter Mobile Number" value={mobilenumber} onChange={(e)=>Setmobilenumber(e.target.value)} />
    </div>
  </div>
</div>

<div class="form my-2">
<label for="floatingTextarea2">Comments</label>
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={message} onChange={(e)=>Setmessage(e.target.value)}></textarea>
 
</div>

<button className='btn btn-outline-success m-3' type="submit">Submit</button>
       </form>
</div>



<div className='col-md-4 m-2  Adreessbook'>
<h4>Address</h4>
<div className='Addresslocator p-3'>
    <div className='addressimage'>
        <img src={location} alt="location"/>
    </div>
    <div className='adresse px-2'>
        <h4>99 Ving's Restaurent</h4>
        <h6>11-9,Raghaviah Complex</h6>
        <h6>Mangamuru Donka Road</h6>
        <h6>Ongole-(A.P)</h6>
    </div>
</div>


<div className='Addresslocator p-3'>
    <div className='addressimage'>
        <img src={email} alt="email"/>
    </div>
    <div className='adresse px-2'>
        <h6>info@99vings@gmail.com</h6>
        
    </div>
</div>


<div className='Addresslocator p-3'>
    <div className='addressimage'>
        <img src={mobile} alt="phone"/>
    </div>
    <div className='adresse px-2'>
        <h6>+91-9850055555</h6>
        
    </div>
</div>
 
</div>



    <div className='container-fluid p-0 m-2'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.5836007717908!2d80.03115247326727!3d15.506814254252399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b014a3c08b215%3A0x719eb338589fb7e8!2s99%20Mandi%20Ongole!5e0!3m2!1sen!2sin!4v1735385373993!5m2!1sen!2sin" height="600px" width="100%"  allowfullscreen="true" loading="lazy" title="location" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>


</div>
</div>


<div className="App">
      <FloatingWhatsApp
        phoneNumber="+91-7799254857"
        accountName="99mandi Ongole"
        allowEsc
        allowClickAway
        notification
        notificationSound
        statusMessage='Online'
      />
    </div>

</div>
  
  )
}

export default Contactus