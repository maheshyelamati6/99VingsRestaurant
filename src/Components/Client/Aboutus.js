import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';
import "./App.css";
import logo from "./Assessts/smalloutlet.jpg"
import c1 from "./Assessts/c-1.jpg";
import c2 from "./Assessts/c-2.jpg";
import c3 from "./Assessts/c-3.jpg";
import boss1 from "./Assessts/boss-1.jpg";
import boss2 from "./Assessts/boss-2.jpg";
import delicious from "./Assessts/tasty.png";
import love from "./Assessts/love.png";
import money from "./Assessts/money.png";
import quality from "./Assessts/quality.png";

const Aboutus = () => {

  return (
    <div>

 <div className='bread p-0'>
     
       <CBreadcrumb>
       <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
       <CBreadcrumbItem active>AboutUs</CBreadcrumbItem>
      </CBreadcrumb>
       </div>

       <h2 className='textheader p-2'>How We Started</h2>
       <div className='underline p-0 '></div>
       <div className='underline1 py-1'></div>

       <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-8'>
          <div class="stepper d-flex flex-column mt-5 ml-2 p-3">
    <div class="d-flex mb-1">
      <div class="d-flex flex-column pr-4 align-items-center">
        <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">3</div>
        <div class="line h-100"></div>
      </div>
      <div>
        <h5 class="text-dark">We Expanded our Restaurent Chain in Various Locations in A.P</h5>
        <p class="lead text-muted pb-3">Currently,We Have Restaurent's in Ongole & Narasaraopet.</p>
      </div>
    </div>
    <div class="d-flex mb-1">
      <div class="d-flex flex-column pr-4 align-items-center">
        <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">2</div>
        <div class="line h-100"></div>
      </div>
      <div>
        <h5 class="text-dark">At 2015, We Started a Restaurent called 99 Ving's</h5>
        <p class="lead text-muted pb-3">Our First Priority is to Have a Luxury Restaurent and to Offer Candle Light Dinner Facility. </p>
      </div>
    </div>
    <div class="d-flex mb-1">
      <div class="d-flex flex-column pr-4 align-items-center">
        <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">1</div>
        <div class="line h-100 d-none"></div>
      </div>
      <div>
        <h5 class="text-dark">Started at 2012</h5>
        <p class="lead text-muted pb-3">We started a small Outlet in a Complex at Narasaraopet.</p>
      </div>
    </div>
  </div>
          </div>


          <div className='col-md-4 p-5 logodesc'>
          <img src={logo} className="card-img-top" alt="..."/>
          </div>

        </div>
       </div>

     

     <div className='container p-5'>
      <div className='row'>
        <div className='col-md-12 bannerimg'>

        <CCarousel controls indicators>
      <CCarouselItem>
        <CImage className="carouselslist" src={c1} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="carouselslist" src={c2} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="carouselslist" src={c3} alt="slide 3" />
      </CCarouselItem>
    </CCarousel>

        </div>
      </div>
     </div>
    

    
     <h2 className='textheader p-2'>Our Promise</h2>
     <div className='underline p-0'></div>
     <div className='underline1 py-1'></div>
  
  <div className='container promisesdesc p-3 '>
    <div className='row'>
      <div className='col-md-3 smallpromises pt-4'>
      <img src={delicious} alt="delicious"/>
      <p>We prepare the Menu in Traditional way and with Perfect Usage of Ingredients.</p>
      </div>

      <div className='col-md-3 smallpromises pt-4 '>
      <img src={love} alt="love"/>
      <p>Prepares the Dishes with love and Serves with a Joy of Giving.</p>
        </div>

        <div className='col-md-3 smallpromises pt-4'>
        <img src={money} alt="money"/>
        <p>All the Recepies are of with the Budget Friendly Prices. </p>
        </div>


        <div className='col-md-3 smallpromises pt-4'>
        <img src={quality} alt="quality"/>
        <p>Prepares in Unique Style and will be delicious to Eat.</p>
        </div>
    </div>
  </div>

  <h2 className='textheader p-2'>Our Partners</h2>
     <div className='underline p-0'></div>
     <div className='underline1 py-1'></div>


     <div className='container aboutwe my-2'>
      <div className='row'>
        <div className='col-md-5 frame imagesboss m-2 p-5'>
         <div className='col-md-4'>
         <img src={boss1} alt=""/>
         </div>
        <h4>Mr.Innamuri Gopi</h4>
        <h4>Director</h4>
        </div>

        <div className='col-md-5 frame imagesboss m-2 p-5'>
        <div className='col-md-4'>
         <img src={boss2} alt=""/>
         </div>
        <h4>Mr.Innamuri Gopi</h4>
        <h4>Director</h4>
        </div>
      </div>
     </div>










    </div>
  )
}

export default Aboutus