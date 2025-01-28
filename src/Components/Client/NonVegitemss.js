import React,{useState,useEffect} from 'react';
import {get,ref} from "firebase/database";
import database from './firebase';
import { useParams } from 'react-router-dom';

const NonVegitemss = () => {
    const[displaydata,Setdisplaydata]=useState([]);
    const {id}=useParams();

    useEffect(()=>{
        const userArray=ref(database,'NonVegItems');
     get(userArray).then((snapshot)=>{
            if(snapshot.exists()){
                const userArray=Object.entries().val().map(([id,data])=>({
                    id,...data,
                }));
                Setdisplaydata(userArray);
            }
            else{
                alert('No Data Available')
            }
        })


    },[id])


  return (
    <div>

         <div className='container'>
            <div className='row'>
                <div className='col-md-5'>
                    <img src={displaydata.imgpath} alt=""/>
                </div>

                <div className='col-md-6'>
                   <h6>Course:{displaydata.course}</h6>
                   <h6>Dish Code:{displaydata.code}</h6>
                   <h6>Price:{displaydata.price}</h6>
                   <h6>Quantity:{displaydata.quantity}</h6>
                   <h6>Desc:{displaydata.desc}</h6>
                   
                </div>
            </div>

         </div>

    </div>
  )
}

export default NonVegitemss