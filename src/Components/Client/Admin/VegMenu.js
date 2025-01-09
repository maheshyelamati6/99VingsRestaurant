import React,{useState} from 'react';
import axios from 'axios';
import vegmenu from "../Assessts/vegcartton.jpg";

const VegMenu = () => {


  const[dishname,Setdishname]=useState('');
  const[code,Setcode]=useState('');
  const[course,Setcourse]=useState('');
  const[imgpath,Setimgpath]=useState('');
  const[desc,Setdesc]=useState('');
  
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
    axios.post("https://vings-43c54-default-rtdb.firebaseio.com/VegItems.json",{dishname,code,course,imgpath,desc})
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



  return (
    <div className='container-fluid p-0'>
        <h4>VegMenu</h4>
        <section className='formbuild'>
        <div className='col-md-5'>
           <form>
            <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Enter Dish Name</span>
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
               
               <button className='btn btn-outline-success mb-3' onClick={submitData}>Submit</button>
            </form>
           </div>
  
             <div className='col-md-6 imageside p-2'>
              <img src={vegmenu} alt="vegcartoon"/>
             </div>
        </section>
    </div>
  )
}

export default VegMenu