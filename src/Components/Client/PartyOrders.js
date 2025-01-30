import React,{useState,useEffect} from 'react';
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';
import "./App.css";
import {get,ref} from "firebase/database";
import database from './firebase';

const PartyOrders = () => {
  const[partyorders,Setpartyorders]=useState([]);

  useEffect(()=>{
    const userArray=ref(database,'PartyOrders');
    get(userArray).then((snapshot)=>{
      if(snapshot.exists()){

const userArray=Object.entries(snapshot.val()).map(([id,data])=>({
  id,...data
}));
Setpartyorders(userArray);
      }
      else{
        alert('No Data Available');
      }
    })
    

  },[])

  return (
    <div>

        <div className='bread p-0'>
                             <CBreadcrumb>
                             <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
                             <CBreadcrumbItem>Party Orders</CBreadcrumbItem>
                            </CBreadcrumb>
                             </div>



                             {
  partyorders.map((bat)=>{

    return <tr key={bat.id}>

      <div className='container'>
        <div className='row itemsgrid m-2'>
          <div className='col-6 imagebanner col-md-4'>
           <img src={bat.imgpath} alt="" className='partyimage p-3'/>
          </div>

          <div className='col-6 col-md-8 p-5'>
          <h5>Course:{bat.course}</h5>
            <h5>Dish Name:{bat.dishname}</h5>
            <h5>Dish Code:{bat.code}</h5>
            <p>Desc:{bat.desc}</p>
          </div>
        </div>
      </div>

    </tr>
  })
}
 




    </div>
  )
}

export default PartyOrders