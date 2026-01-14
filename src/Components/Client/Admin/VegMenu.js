import React,{useState,useEffect} from 'react';
import axios from 'axios';
import{get,ref,remove,update} from "firebase/database";
import database from '../firebase';
import vegmenu from "../Assessts/vegcartton.jpg";
import"../App.css";


const VegMenu = () => {
  const[displaydata,Setdisplaydata]=useState([]);
  const[id,Setid]=useState('');
  const[name,Setname]=useState('');
  const[code,Setcode]=useState('');
  const[course,Setcourse]=useState('');
  const[imgpath,Setimgpath]=useState('');
  const[imgpath2,Setimgpath2]=useState('');
  const[imgpath3,Setimgpath3]=useState('');
  const[desc,Setdesc]=useState('');
  const[price,Setprice]=useState('');
  const[quantity,Setquantity]=useState('');

  
  const submitData=(e)=>{
    e.preventDefault();
      if(name.length===0){

        alert("Dishname is Required");
      }

      else if(code.length===0){
        alert("DishCode is Required");
      }

      else if(course.length===0){
        alert("Course Option is Required");
      }

      else if(price.length===0){
        alert("Price  is Required");
      }

      else if(quantity.length===0){
        alert("quantity  is Required");
      }

      else if(desc.length===0){
        alert("Description is Required");
      }
      else if(imgpath.length===0){
        alert("Image Field is Required");
      }


      else{
    
        axios.post("https://vings-43c54-default-rtdb.firebaseio.com/VegItems.json",{name,code,course,imgpath,desc,price,quantity,imgpath2,imgpath3})
        .then(()=>{
          alert("Data Posted Successfully!....");
          Setname("");
          Setcode("");
          Setcourse("");
          Setimgpath("");
          Setimgpath2("");
          Setimgpath3("");
          Setquantity("");
          Setprice("");
          Setdesc("");
          })
    
          .catch((err)=>{
    
            console.log(err);
          })

      
      }
     
  }



  useEffect(()=>{
    const userArray=ref(database,'VegItems');

    get(userArray).then((snapshot)=>{

      if(snapshot.exists()){

        const userArray=Object.entries(snapshot.val()).map(([id,data])=>({
          id,...data
        }));

        Setdisplaydata(userArray);

      }

      else{
        console.log("No Data Available");
      }
    })
  })

  const deletedata=(id)=>{
    remove(ref(database,'VegItems/'+id))
    .then(()=>{
      alert("Data Record Deleted Successfully");
    })
    .catch((err)=>{

      console.log(err);
    })
    
  }


 const EditData=async(name,code,course,quantity,imgpath,imgpath2,imgpath3,price,desc)=>{
  
  Setname(name)
  Setcode(code)
  Setcourse(course)
  Setquantity(quantity)
  Setimgpath(imgpath)
  Setimgpath2(imgpath2)
  Setimgpath3(imgpath3)
  Setprice(price)
  Setdesc(desc)

 }

 const updateData=(e)=>{
  e.preventDefault();
 
  update(ref(database,"VegItems/"+id),{

Dishname:name,
Dishcode:code,
Dishcourse:course,
Quantity:quantity,
Imgpath1:imgpath,
Imgpath2:imgpath2,
imgpath3:imgpath3,
Price:price,
Desc:desc
})

  .then(()=>{
    alert('Data Updated Successfully.....!');
    Setname('');
    Setcourse('');
    Setcode('');
    Setimgpath('');
    Setimgpath2('');
    Setimgpath3('');
    Setprice('');
    Setquantity('');
    Setdesc('');
  })


  .catch((err)=>{
    alert(err);
  })
 }
  
  
  return (
    <div className='container-fluid p-0'>
        <h4>VegMenu</h4>
        <section className='formbuild'>
        <div className='col-md-5'>
          <div className='boxshaped'>
          <form>
            <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Enter Dish Name</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={name} onChange={(e)=>Setname(e.target.value)}/>
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

<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Enter Quantity</label>
  <select class="form-select" id="inputGroupSelect01" value={quantity} onChange={(e)=>Setquantity(e.target.value)}>
    <option selected>Choose...</option>
    <option value="Half-plate">Half-Plate</option>
    <option value="Full-plate">Full-Plate</option>
   
  </select>
</div>


            <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Enter Img Path</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={imgpath} onChange={(e)=>Setimgpath(e.target.value)}/>
            </div>

            <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Enter Img Path</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={imgpath2} onChange={(e)=>Setimgpath2(e.target.value)}/>
            </div>

            <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Enter Img Path</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={imgpath3} onChange={(e)=>Setimgpath3(e.target.value)}/>
            </div>

            <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Enter Price</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={price} onChange={(e)=>Setprice(e.target.value)}/>
            </div>

            <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Enter Description</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={desc} onChange={(e)=>Setdesc(e.target.value)}/>
            </div>
               
               <button className='btn btn-outline-success m-3' onClick={submitData}>Submit</button>
               <button className='btn btn-outline-warning m-3' onClick={updateData} >Update Data</button>
            </form>
          </div>
           </div>
  
             <div className='col-md-6 imageside p-5'>
              <img src={vegmenu} alt="vegcartoon"/>
             </div>
        </section>

 <h4 className='my-2'>Table Data</h4>

 {

displaydata.map((bat)=>{

  return <tr key={bat.id}>

   <div className='container-fluid boxsized m-2'>
    <div className='row'>
      <div className='col-md-5 imagedata p-2'>
        <img  src={bat.imgpath} alt=""/>
        <img className='m-2 ' src={bat.imgpath2} alt=""/>
        <img className='m-2 ' src={bat.imgpath3} alt=""/>
      </div>
        
        <div className='col-md-7 p-5'>
            <h4>Dish Name:-{bat.name} </h4>
            <h4>Dish Code:-{bat.code} </h4>
            <h4>Price:-{bat.price} </h4>
            <h4>Quantity:-{bat.quantity} </h4>
            <h4>Course:-{bat.course} </h4>
            <h6>Description:-{bat.desc} </h6>
            <button className='btn btn-outline-success m-2' onClick={()=>EditData(bat.name,bat.code,bat.course,bat.Quantityuantity,bat.imgpath,bat.imgpath2,bat.imgpath3,bat.price,bat.desc)}>Edit</button>
            <button className='btn btn-outline-danger' onClick={()=>deletedata(bat.id)}>Delete</button>
        </div>
   
    </div>
   </div>


  </tr>
})
}



    </div>
  )
}

export default VegMenu