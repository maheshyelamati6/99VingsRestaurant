import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {get,ref} from "firebase/database";
import database from '../firebase';
import logo from "../Assessts/chickencartoon.avif";
import "../App.css";

const NonVegMenu = () => {

  const[dishname,Setdishname]=useState('');
  const[code,Setcode]=useState('');
  const[course,Setcourse]=useState('');
  const[imgpath,Setimgpath]=useState('');
  const[desc,Setdesc]=useState('');

  const[postdata,Setpostdata]=useState([]);
  
  const submitData=(e)=>{

    e.preventDefault();

      if(dishname.length===0){

        alert("Dishname is Required");
      }

      else if(code.length===0){
        alert("DishCode is Required");
      }

      else if(course.length===0){
        alert("Course Option is Required");
      }

      else if(desc.length===0){
        alert("Description is Required");
      }

      else{
    axios.post("https://vings-43c54-default-rtdb.firebaseio.com/NonVegItems.json",{dishname,code,course,imgpath,desc})
    .then(()=>{
      alert("Data Posted Successfully!....");
      Setdishname("");
      Setcode("");
      Setcourse("");
      Setimgpath("");
      Setdesc("");
      })

      .catch((err)=>{

        console.log(err);
      })
      }

  }

  useEffect(()=>{

    const userref=ref(database,'NonVegItems');
    get(userref).then((snapshot)=>{
      if(snapshot.exists()){

        const Userarray=Object.entries(snapshot.val()).map(([id,data])=>({
          id,...data,
        }));
         Setpostdata(Userarray);
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
    <div className='container-fluid p-0'>
      <h4>Non-VegMenu</h4>
        <div className='formbuild'>
           <div className='col-md-5'>
           <form>
            <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Enter Dish Name</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={dishname} onChange={(e)=>Setdishname(e.target.value)}/>
            </div>

            <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Enter Product Code</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={code} onChange={(e)=>Setcode(e.target.value)}/>
            </div>

            <div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Enter Course</label>
  <select class="form-select" id="inputGroupSelect01" value={course} onChange={(e)=>Setcourse(e.target.value)}>
    <option selected>Choose...</option>
    <option value="Starters">Starters</option>
    <option value="Main Course">Main Course</option>
    <option value="Apitite">Apitite</option>
  </select>
</div>

            <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Enter Img Path</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={imgpath} onChange={(e)=>Setimgpath(e.target.value)}/>
            </div>

            <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Enter Description</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={desc} onChange={(e)=>Setdesc(e.target.value)}/>
            </div>
               
               <button className='btn btn-outline-success mb-3'onClick={submitData}>Submit</button>
            </form>
           </div>
  
             <div className='col-md-6 imageside p-0'>
<img src={logo} alt="itemcartoon"/>
             </div>
        </div>
       

       <div className='container-fluid p-0'>
        <h4>Table Data</h4>

          {

            postdata.map((bat)=>{

              return <tr key={bat.id}>

               <div className='container-fluid boxsized m-2'>
                <div className='row'>
                  <div className='col-md-4 imagedata'>
                    <img src={bat.imgpath} alt=""/>
                  </div>
                    
                    <div className='col-md-7'>
                        <h4>Dish Name:-{bat.dishname} </h4>
                        <h4>Dish Code:-{bat.code} </h4>
                        <h4>Course:-{bat.course} </h4>
                        <h6>Description:-{bat.desc} </h6>
                        <button className='btn btn-outline-success m-2'>Update</button>
                        <button className='btn btn-outline-danger'>Delete</button>
                    </div>
               
                </div>
               </div>


              </tr>
            })
          }
        
       </div>

    </div>
  )
}

export default NonVegMenu