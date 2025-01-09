import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Homepage from './Homepage';
import Aboutus from './Aboutus';
import Footer from './Footer';
import Gallery from './Gallery';
import Contactus from './Contactus';
import Vegitems from './Vegitems';
import Errorpage from './Errorpage';
import Adminpage from './Admin/Adminpage';
import AdminDashboard from './Admin/AdminDashboard';
import NonVegItems from './NonVegItems';
import PartyOrders from './PartyOrders';

const Routing = () => {
  return (
    <div>
<Routes>
<Route path='/' element={<Homepage/>}/>
<Route path='/Aboutus' element={<Aboutus/>}/>
<Route path='/Vegitems' element={<Vegitems/>}/>
<Route path='/NonVegItems' element={<NonVegItems/>}/>
<Route path='/PartyOrders' element={<PartyOrders/>}/>
<Route path="*" element={<Errorpage/>}/>
<Route path="/Gallery" element={<Gallery/>}/>
<Route path="/Contactus" element={<Contactus/>}/>
<Route path='/Footer' element={<Footer/>}/>
<Route path="/99mandiadmin" element={<Adminpage/>}/>
<Route path="/99mandiadmindashboard" element={<AdminDashboard/>}/>
</Routes>
    </div>
  )
}

export default Routing