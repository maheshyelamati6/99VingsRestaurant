import React, { useState } from 'react'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';
import "../App.css";
import WelcomeDashboard from './WelcomeDashboard';
import Contactusadminpage from './Contactusadminpage';
import NonVegMenu from './NonVegMenu';
import Partyorders from './Partyorders';
import VegMenu from './VegMenu';

const AdminDashboard = () => {

    const[view,Setview]=useState("");

    const Dashboardview=()=>{

        let show="";

        if(view==="")
        {
            show=<WelcomeDashboard/>
        }

        else if(view === "NonVegMenu"){

            show=<NonVegMenu/>
        }
       
        else if(view==="VegMenu"){
            show=<VegMenu/>
        }
        
        else if(view === "partyorders"){

            show=<Partyorders/>
        }

          
        else if(view==="Contactusadminpage"){

            show=<Contactusadminpage/>
        }

            return show;

           


            
        }
    

  return (
    <div>

          <div className='bread p-0'>
                             <CBreadcrumb>
                             <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
                             <CBreadcrumbItem active>Admin DashBoard</CBreadcrumbItem>
                            </CBreadcrumb>
                             </div>

<h1 className='textheader m-3'> Welcome to Admin DashBoard</h1>
<div className='underline p-0'></div>
<div className='underline1 py-1'></div>


<div className='container'>
    <div className='row'>
   
        <div className='col-md-2'>


<aside className='m-3'>
<button className='btn btn-outline-danger my-2' onClick={()=>Setview('NonVegMenu')}> Non-VegMenu</button>
<button className='btn btn-outline-success my-2' onClick={()=>Setview('VegMenu')}> Veg Menu</button>
<button className='btn btn-outline-warning my-2' onClick={()=>Setview('partyorders')}> Party Orders</button>
<button className='btn btn-primary my-2' onClick={()=>Setview('Contactusadminpage')}>Contactus</button>

</aside>
          
         

        </div>

        <div className='col-md-10'>
            {Dashboardview(view)}
            </div>
    </div>
</div>



    </div>
  )
}

export default AdminDashboard