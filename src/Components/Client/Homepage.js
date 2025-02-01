import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { CCarousel, CCarouselItem, CImage,CNavLink,CButton } from '@coreui/react';
import "./App.css";
import Welcome from "./Assessts/Welcome.png";
import img2 from "./Assessts/image-2.jpg";
import img3 from "./Assessts/image-3.avif";
import men1 from "./Assessts/men-2.avif";
import men2 from "./Assessts/men-3.avif";
import men3 from "./Assessts/men-4.avif";
import centreimage from "./Assessts/centreimage.jpg";
import thanks from "./Assessts/partyorders.jpg";
import img8 from "./Assessts/image-8.jpg";
import imga1 from "./Assessts/img1.gif";
import imga2 from "./Assessts/img2.gif";
import imga3 from "./Assessts/img3.gif";
import imga4 from "./Assessts/img4.gif";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const Homepage = () => {
  const [userLocation, setUserLocation] = useState(null);
  const[show,Setshow]=useState(true);
  const handleClose= ()=>Setshow(false);
 

  useEffect(()=>{
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
      if (hasSeenPopup) {
        Setshow(false);
      } else {
        localStorage.setItem('hasSeenPopup', 'true');
      }
    },[]);



  const getUserLocation = () => {
    // if geolocation is supported by the users browser
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // save the geolocation coordinates in three variables
          const { latitude, longitude } = position.coords;
             axios.post("https://vings-43c54-default-rtdb.firebaseio.com/Location.json",{latitude,longitude})
          setUserLocation({ latitude, longitude});
        },
        // if there was an error getting the users location
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
    // if geolocation is not supported by the users browser
    else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (

    <div>

<div className='container Mmodal' >

   <Modal show={show} onHide={handleClose} id="myModal">
   <div className='col-md-1'>
          </div>
        <Modal.Header closeButton onClick={getUserLocation}>
          
          <Modal.Title>
            Welcome to 99 Mandi Restaurant</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Explore our Range of Varities!</Modal.Body>
        <img src={Welcome} alt="Welcome"/>
      </Modal>
   </div>


        <div className='container-fluid welcome '>
          <div className='row'>
          <div className='col-md-7 p-1  bannerimg '>
          <CCarousel controls indicators>
      <CCarouselItem>
        <CImage className="carouselslist" src={img3} alt="slide 1"/>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="carouselslist" src={img2} alt="slide 2"/>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="carouselslist" src={img8} alt="slide 3"/>
      </CCarouselItem>
    </CCarousel>
            </div>
          
          <div className='col-md-5'>
  <h1 className='p-5'>99Ving's Restaurant</h1>
  <h4 className='cardtitle'>Our Specialities</h4>


 <div className='subtitles'>
 <div className='gifcontent'>
    <img src={imga1} alt="gifimg"/>
    <h6 className='p-4'>Continental Dishes</h6>
  </div>

  <div className='gifcontent'>
    <img src={imga2} alt="gifimg"/>
    <h6 className='p-4'>Chineese Items</h6>
  </div>
 </div>

 <div className='subtitles'>
 <div className='gifcontent'>
    <img src={imga3} alt="gifimg"/>
    <h6 className='p-4'>Non-Veg Starters</h6>
  </div>

  <div className='gifcontent'>
    <img src={imga4} alt="gifimg"/>
    <h6 className='p-4'>Veg Starters</h6>
  </div>
 </div>

          </div>
          </div>
        </div>
        
        
<h1 className='textheader m-3'>Welcome to 99Ving's</h1>
<div className='underline p-0'></div>
<div className='underline1 py-1'></div>

<p className='textheader1'>Since 2012, we've been serving our guests the best quality treats,traditionally made and presented with care.</p>

<div className='container-fluid py-5 '>
  <div className='row'>
    <div className='col-md-4 p-3 '>
      <div className='p-3'>
        <h4>AUTHENTIC RECIPES</h4>
        <h6>Our products are based on
traditional home-style recipes
using fresh ingredients.</h6>
      </div>


      <div className='p-3'>
        <h4>COOKED WITH LOVE</h4>
        <h6>Our passion for Cooking is poured into
every recipe, serving smiles on a
plate everyday.</h6>
      </div>

    </div>


    <div className='col-md-4 imagecentre'>
   <CNavLink href='/'> <img src={centreimage} alt="centreimg"/></CNavLink>
    </div>


    <div className='col-md-4 p-3'>
    <div className='p-3'>
        <h4>COMMITTED TO QUALITY</h4>
        <h6>From our ingredients to our
kitchen operations & guest services,
we always prioritize quality.</h6>
      </div>

      <div className='p-3'>
        <h4>HONESTLY PRICED</h4>
        <h6>We constantly strive to offer the best
        products at the right prices.</h6>
      </div>
    </div>
  </div>
</div>

<div className='container-fluid thanks py-2  '>
  <div className='row'>
    <div className='col-md-6 p-5'>
<h4 className='p-2'>We Would Like to Take the <span className='cardtitle'>Party Orders!!</span></h4>

<p>We are One Step Further to Take Small Party Orders from Minimum 15 Persons Onwards...!</p>

<CButton className='btn btn-outline-success arrowbutton m-5' href="/Gallery">KNOW MORE</CButton>
    </div>

    <div className='col-md-6 thanksimg p-5'>
      <img src={thanks} alt="thanksgiving"/>
      </div>
  </div>
 </div>
        
        <h3 className='textheader p-2'>Feedback from Customer's</h3>
        <div className='underline p-0'></div>
        <div className='underline1 py-1'></div>
       
       <div className='container-fluid my-2'>
        <div className='row '>
          <div className='col-md-4 reviews px-1 my-1'>
            <div className='reviewsimg p-2'>
           <img src={men3} alt="reviews"/>
            </div>
            <div>
              <p className='p-1'>Went to Dinner and the Food is Good,Tried the Signature Dish Suggested by the Employee and is Good. </p>
              <h6 className='m-1 cardtitle'>MR. Matt Damon</h6>
            </div>
          </div>

          <div className='col-md-4 reviews px-1 my-1 '>
            <div className='reviewsimg p-2'>
            <img src={men1} alt="reviews"/>
            </div>
            <div>
              <p className='p-1'>Went to Restaurant with Local Friend Suggestion,Food is Good and the Service is Amazing with Reasonable Pricing. </p>
              <h6 className='m-1 cardtitle'>MR. Chandra</h6>
            </div>
          </div>

          <div className='col-md-4 reviews px-1 my-1'>
            <div className='reviewsimg p-2'>
<img src={men2} alt="reviews"/>
            </div>
            <div>
              <p className='p-1'>Pleasant Dining and the Ambience is Good and Service is Awesome and Tried the Classical Items Suggested by the Employee.</p>
              <h6 className='m-1 cardtitle'>MR.Raviteja</h6>
            </div>
          </div>





        </div>
       </div>
        
       

<div className="App">
      <FloatingWhatsApp
        phoneNumber="+91-7799254857"
        accountName="99mandi Ongole"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
</div>

    </div>
  )
}

export default Homepage