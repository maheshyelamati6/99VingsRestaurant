import React from 'react';
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import { CImage } from '@coreui/react'

import img1 from "./Assessts/chickenpulao.jpg";
import img2 from "./Assessts/chickenafghani.jpg";
import img3 from "./Assessts/chickenjoint.jpg";
import img4 from "./Assessts/chickenwings.jpg";
import img5 from "./Assessts/chickenwings2.jpg";
import img6 from "./Assessts/frenchfries.jpg";
import img7 from "./Assessts/spagethi.avif";
import img8 from "./Assessts/muttonpulao.avif";
import img9 from "./Assessts/muttonbiryani.jpg";
import img10 from "./Assessts/chickendoublemasala.avif";
import "./App.css";


const Gallery = () => {
   

  return (
    <div>

         <div className='bread p-0'>
             
               <CBreadcrumb>
               <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
               <CBreadcrumbItem active>Gallery</CBreadcrumbItem>
              </CBreadcrumb>
               </div>
<h2 className='textheader'>Signature Dishes of 99 Ving's </h2>
<div className='underline p-0'></div>
<div className='underline1 py-1'></div>

<div className='container-fluid  my-2 '>
  <div className='row'>
    <div className='col-md-3 cardsgallery py-2'>
    <CCard>
      <CCardImage orientation="top" src={img1} alt="image1" className='p-3' />
      <CCardBody>
        <CCardTitle className='cardtitle'>99Ving's Chicken pulao </CCardTitle>
        <CCardText>
          Made with Afghani Imported Species and with Afghani Chef with Perfect Cashew and Badam Mix.
        </CCardText>
       
      </CCardBody>
    </CCard>
    </div>

    <div className='col-md-3 cardsgallery py-2'>
    <CCard>
      <CCardImage orientation="top" src={img2} alt="image1" className='p-3' />
      <CCardBody>
        <CCardTitle className='cardtitle'>99Ving's Chicken Afghani</CCardTitle>
        <CCardText>
         Made with Spicy Chillies and Best Spices and will be Mild Sweet and Sour.Perfect Mix with the Pulao.
        </CCardText>

      </CCardBody>
    </CCard>
    </div>


    <div className='col-md-3 cardsgallery py-2'>
    <CCard>
      <CCardImage orientation="top" src={img3} alt="image1" className='p-3' />
      <CCardBody>
        <CCardTitle className='cardtitle'>99Ving's Periperi Chicken</CCardTitle>
        <CCardText>
          Dried with the Masala Spices for 2-3 Hours and  will be Fried upto 20 Mins and Served with Sauces.
        </CCardText>
       
      </CCardBody>
    </CCard>
    </div>


    <div className='col-md-3 cardsgallery py-2'>
    <CCard>
      <CCardImage orientation="top" src={img4} alt="image1" className='p-3' />
      <CCardBody>
        <CCardTitle className='cardtitle'>99Ving's Chicken Wing's</CCardTitle>
        <CCardText>
          Blended with Tomato and Chilli Sauces and Fried later Mixes Masala Paste and Fried.  
        </CCardText>
       
      </CCardBody>
    </CCard>
    </div>

  </div>
</div>



<h2 className='textheader'>Classical Dishes of 99 Ving's </h2>
<div className='underline p-0'></div>
<div className='underline1 py-1'></div>

<div className='container-fluid my-2 '>
  <div className='row'>

    <div className='col-md-3 cardsgallery py-2'>
    <CCard>
      <CCardImage orientation="top" src={img10} alt="image1" className='p-3' />
      <CCardBody>
        <CCardTitle className='cardtitle'>Chicken Dum Biryani</CCardTitle>
        <CCardText>
         One of the Classiest Evergreen Dish Made with Experienced chef and Served with Love and Liked by Majority Customers.
        </CCardText>
       
      </CCardBody>
    </CCard>
    </div>

    <div className='col-md-3 cardsgallery py-2'>
    <CCard>
      <CCardImage orientation="top" src={img6} alt="image1" className='p-3' />
      <CCardBody>
        <CCardTitle className='cardtitle'>French Fries</CCardTitle>
        <CCardText>
         One of the Coolest Starter Mixed with Cheese and Little added Butter and with Mild Species Serves with Sweet and Sour Ketchup. 
        </CCardText>
    
      </CCardBody>
    </CCard>
    </div>


    <div className='col-md-3 cardsgallery py-2'>
    <CCard>
      <CCardImage orientation="top" src={img7} alt="image1" className='p-3' />
      <CCardBody>
        <CCardTitle className='cardtitle'>Special Sphageti</CCardTitle>
        <CCardText>
          A Continetal Dish which Our's Chef went to a Training Programm in Italy and Tried with Local Ingredients and is Yummy. 
        </CCardText>
      
      </CCardBody>
    </CCard>
    </div>


    <div className='col-md-3 cardsgallery py-2'>
    <CCard>
      <CCardImage orientation="top" src={img8} alt="image1" className='p-3' />
      <CCardBody>
        <CCardTitle className='cardtitle'>Chicken Double Masala</CCardTitle>
        <CCardText>
          More Spicy.More Guts to Eat.Those who loves the Spicy Foods,Definietly Needs to Try This Dish Crafted with Care.
        </CCardText>
       
      </CCardBody>
    </CCard>
    </div>

  </div>
</div>


    </div>
  )
}

export default Gallery