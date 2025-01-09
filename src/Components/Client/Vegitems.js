import React,{useState,useEffect} from 'react';
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';
import "./App.css";
import database from './firebase';
import {get,ref} from "firebase/database";

const Vegitems = () => {
  const[displaydata,Setdisplaydata]=useState([]);

  useEffect(()=>{
const userArray=ref(database,'VegItems');
get(userArray).then((snapshot)=>{
  if(snapshot.exists()){
   const userArray=Object.entries(snapshot.val()).map(([id,data])=>({
    id,...data
   }));
    Setdisplaydata(userArray);
  }

  else {
    alert('No Data Available')
  }
})

.catch((err)=>{
console.log(err);
})

  },[])
  return (
    <div>

       <div className='bread p-0'>
             <CBreadcrumb>
             <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
             <CBreadcrumbItem active>Vegitems</CBreadcrumbItem>
            </CBreadcrumb>
             </div>


             <div className='container d-flex flex-column align-items-center my-2'>    
        <input className="searchcontents" type="search" placeholder="Search by Course" aria-label="Search"/>
        </div>
 

        {

displaydata.map((bat)=>{

  return <tr key={bat.id}>
    <div className='col boxborder m-2'>

<div className="imgsection p-2">
<img src={bat.imgpath} alt=""/>
</div>

<div className='p-4'>
<h6>Course:{bat.course}</h6>
<h6>Dish Name:{bat.dishname}</h6>
<h6>Dish Code:{bat.code}</h6>
<h6>Quantity:{bat.quantity}</h6>
<h6>Price:{bat.price}</h6>
</div>
</div>
  </tr>
})
}

             


    </div>
  )
}

export default Vegitems