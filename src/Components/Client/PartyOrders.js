import React,{useState,useEffect} from 'react';
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';
import partybuffet from "./Assessts/partybuffets.jpg";
import "./App.css";
import {get,ref} from "firebase/database";
import database from './firebase';
import {FloatingWhatsApp} from 'react-floating-whatsapp'

const PartyOrders = () => {
  const[partyorders,Setpartyorders]=useState([]);
  const[loading,Isloading]=useState(true);

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

  useEffect(()=>{
    setTimeout(() => {
      Isloading(false);
    }, 3000);
  })

  return (
    <div>

        <div className='bread p-0'>
                             <CBreadcrumb>
                             <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
                             <CBreadcrumbItem>Party Orders</CBreadcrumbItem>
                            </CBreadcrumb>
                             </div>



                             {
  partyorders.map((bat,index)=>{

    return <tr key={(index)}>

     {
      loading ?(
        <div className='imagecentres'>

          <img src={partybuffet} alt=""/>

<div className='textcentre'>
<h4>Loading......!</h4>
</div>
         
             
          </div>

       
      ):(
        <div className='container'>
        <div className='row itemsgrid m-2'>
          <h6>{index+1}</h6>
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
      )
     }

    </tr>
  })
}
 
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

export default PartyOrders