import React,{useState,useEffect} from 'react';
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';
import "./App.css";
import database from './firebase';
import {get,ref} from "firebase/database";
import {NavLink} from 'react-router-dom';

const Vegitems = () => {
  const[displaydata,Setdisplaydata]=useState([]);
  const[search,Setsearch]=useState('');

 

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


             <div className='container d-flex my-2'>    
        <input className="searchcontents" type="search" placeholder="Search by Course" aria-label="Search" onChange={(e)=>Setsearch(e.target.value)}/>
        </div>
 

        {

displaydata.filter((bat)=>{
  return search.toLowerCase() === ''? bat:bat.course.toLowerCase().includes(search) || search.toLowerCase()=== '' ? bat:bat.dishname.toLowerCase().includes(search)
})
.map((bat,index)=>{

  return <tr key={(index)}>
    <div className='card-section m-2'>

<NavLink to={`VegItems/${bat.id}`}>
    <h6>{index+1}</h6>
<div className="imgsection p-2">
<img src={bat.imgpath} alt=""/>
</div>
</NavLink>

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