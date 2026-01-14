import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './Components/Client/Header';
import Routing from './Components/Client/Routing';
import Footer from './Components/Client/Footer';
import  ClimbingBoxLoader  from "react-spinners/ClimbingBoxLoader";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{

      setLoading(false);
    },4000)

  },[])

  return (

   <div className='app'>

    {loading ? (

      
 <ClimbingBoxLoader
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      

    ):(

     <div>
   <Header/>
   <Routing/>
   <Footer/>
   </div>
)}

 </div>
  );
}

export default App;
