import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Homepage from './Homepage';
import Aboutus from './Aboutus';
import Footer from './Footer';
import Gallery from './Gallery';
import Contactus from './Contactus';

const Routing = () => {
  return (
    <div>
<Routes>
<Route path='/' element={<Homepage/>}/>
<Route path='/Aboutus' element={<Aboutus/>}/>
<Route path='/Footer' element={<Footer/>}/>
<Route path="/Gallery" element={<Gallery/>}/>
<Route path="/Contactus" element={<Contactus/>}/>
</Routes>
    </div>
  )
}

export default Routing