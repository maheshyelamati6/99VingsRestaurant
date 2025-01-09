import React,{useEffect, useState} from 'react';
import {get,ref} from "firebase/database";
import database from './firebase';
import "./App.css";
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';

const NonVegItems = () => {

  const[displaydata,Setdisplaydata]           = useState([]);

  useEffect(()=>{
    const userArray                           = ref(database,'NonVegItems');
    get(userArray).then((snapshot)=>{
      if(snapshot.exists()){
        const userArray=Object.entries(snapshot.val()).map(([id,data])=>({
        id,...data,
        }));
        Setdisplaydata(userArray);
      }

      else{
        console.log('No Data Available');
      }
    })

    .catch((err)=>{

      console.log(err);
    })
    

  },[])

  return (
    <div className                            = 'container-fluid p-0 '>

        <div className                        = 'bread p-0'>
                     <CBreadcrumb>
                     <CBreadcrumbItem href    = "/">Home</CBreadcrumbItem>
                     <CBreadcrumbItem active>Non-Veg Items</CBreadcrumbItem>
                    </CBreadcrumb>
                     </div>

                     <table className         = 'table table-responsive p-5'>

<div className                                = 'table'>
<thead className                              = 'table-dark'>
   <th>Course</th>
   <th>Dish Name</th>
   <th>Dish Code</th>
   <th>Image</th>

 </thead>

 <tbody>
   
   {
     displaydata.map((bat)=>{
       return <tr key                         = {(bat.id)} className='my-2'>
         <td><span className                  = 'bg-warning'>{bat.course}</span></td>
         <td><span>{bat.dishname}</span></td>
         <td>{bat.code}</td>
         <td><img src                         = {bat.imgpath} className='imagesections' alt=""/></td>
         
       
       </tr>
     })
   }
   
     

  
 </tbody>
</div>
</table>

                  







    </div>
  )
}

export default NonVegItems