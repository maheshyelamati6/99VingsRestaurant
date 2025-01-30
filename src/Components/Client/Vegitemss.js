import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {get,ref} from "firebase/database";

 import database from './firebase';


const Vegitemss = () => {
const {id}=useParams();
const[vegitemsdata,Setvegitemsdata]=useState([]);

useEffect(()=>{
    const userArray=ref(database,'VegItems');
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
         <h4>Quantity:{vegitemsdata.quantity}</h4>

        </div>


       
    </div>
 </div>
      


    </div>
  )
}

export default Vegitemss;

    