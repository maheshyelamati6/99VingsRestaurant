import React,{useEffect} from 'react';
import "./App.css";
import {NavLink} from "react-router-dom";
import $ from "jquery";
import logo from "./Assessts/99 Vings.jpg";

const Header = () => {

  useEffect(()=>{
    $(document).on('Click','.navbar-nav',function(e) {
      if( $(e.target).is('NavLink') ) {
          $(this).collapse('hide');
      }
  });
  },[])

  return (
    <div className='container-fluid p-0'>

 
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img src={logo} alt="logoimg"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink className="nav-link active"aria-current="page"  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/AboutUs">AboutUs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/Gallery">Gallery</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Main Menu
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item"  to="/Vegitems">VEG-ITEMS</NavLink></li>
            <li><a className="dropdown-item"  href="#">NON-VEG ITEMS</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item"  href="#">PARTY ORDERS</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/ContactUs" >ContactUs</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>





    </div>
  )
}

export default Header