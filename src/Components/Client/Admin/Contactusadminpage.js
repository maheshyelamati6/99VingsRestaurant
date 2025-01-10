import React,{useState,useEffect} from 'react';
import {get,ref,remove} from 'firebase/database';


import database from "../firebase";

const Contactusadminpage = () => {

const [post, setPost] = useState([]);

 useEffect(()=>{

  const userref=ref(database,'Contacts');
  get(userref).then((snapshot)=>{
    if(snapshot.exists){
      const Userarray=Object.entries(snapshot.val()).map(([id,data])=>({
        id,...data,
      }));
      setPost(Userarray);
    }
    else{
      alert('No Data Available')
    }
  }).catch((err)=>{
    console.log(err);
  })
 
 },[]);


 const deletedata =()=>{
  remove(ref(database,'Contacts/'))
  .then(()=>{
    alert("Data Deleted Successfully...!")
  })
  .catch((err)=>{

    console.log(err);
  })
  window.location.reload();
 }

  return (
    <div>
        <h4>Contactus Admin Page</h4>

<table className='table table-responsive p-5'>

 <div className='table'>
 <thead className='table-dark'>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Mobile Number</th>
    <th>E-mail ID</th>
    <th>Message</th>
    <th>Remarks</th>
  </thead>

  <tbody>
    
    {
      post.map((bat)=>{
        return <tr key={(bat.id)}>
          <td>{bat.firstname}</td>
          <td>{bat.lastname}</td>
          <td>{bat.mail}</td>
          <td>{bat.mobilenumber}</td>
          <td>{bat.message}</td>
          <td><button className='btn btn-outline-danger' onClick={deletedata} >Delete</button></td>
          <td><button className='btn btn-outline-success'>Update</button></td>
        
        </tr>
      })
    }
    
      

   
  </tbody>
 </div>
</table>


    </div>
  )
}

export default Contactusadminpage