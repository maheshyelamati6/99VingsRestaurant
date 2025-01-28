import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {get,ref} from "firebase/database";
import database from './firebase';


const Vegitemss = () => {
const {id}=useParams();
const[vegitemsdata,Setvegitemsdata]=useState([]);

useEffect(()=>{
    const userArray=ref(database,"VegItems/" );   
    get(userArray).then((snapshot)=>{
        if(snapshot.exists()){
          const userArray=Object.entries.val().map(([id,data])=>({
            id,...data
          }));
          Setvegitemsdata(userArray)
        }
          else{
           alert('No Data Available')   
        }
        
    })
    .catch((err)=>{
console.log(err);
    })

},[id])
   
  return (
    <div>
 
 

<div className='container'>
    <div className='row'>
        <div className='col-md-5 imagescard'>
            <img src={vegitemsdata.imgpath} alt=""/>
        </div>
        <div className='col-md-6 detailscard'>
            <h6>{vegitemsdata.code}</h6>
            <h6>{vegitemsdata.course}</h6>
            <h6>{vegitemsdata.dishname}</h6>
            <h6>{vegitemsdata.quantity}</h6>
            <h6>{vegitemsdata.price}</h6>
            <h6>{vegitemsdata.desc}</h6>

        </div>
    </div>
 </div>
      


    </div>
  )
}

export default Vegitemss;

    