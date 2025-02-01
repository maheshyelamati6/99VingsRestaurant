import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {get,ref} from "firebase/database";
import database from './firebase';


const Vegitemss = () => {
const {id}=useParams();
const[vegitemsdata,Setvegitemsdata]=useState([]);

useEffect(()=>{
    const userArray=ref(database,'VegItems/');
    get(userArray).then((snapshot)=>{
      if(snapshot.exists()){
        const userArray=Object.entries(snapshot.val()).map(([ind,data])=>({
          ind,...data
        }))

        Setvegitemsdata(userArray);
      }

      else{
        alert('No Data Available');
      } 
    })

    .catch((err)=>{

      console.log(err);
    })
  

},[])

   
  return (
    <div>
 
 

<div className='container paramsdesc'>
    <div className='row'>
        <div className='col-md-5'>
          <h4>Details:{id}</h4>
        </div>

         
         <div className='col-md-6'>
         <h6>Course:{vegitemsdata.course}</h6>
         <h6>Dish Name:{vegitemsdata.dishname}</h6>
         <h6>Dish Code:{vegitemsdata.code}</h6>
         <h6>Quantity:{vegitemsdata.quantity}</h6>
         <h6>Price:{vegitemsdata.price}</h6>
         </div>

       
    </div>
 </div>
      


    </div>
  )
}

export default Vegitemss;

    