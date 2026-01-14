import React,{useEffect,useState} from 'react';
import "./App.css";
import {NavLink} from "react-router-dom";
import $ from "jquery";
import logo from "./Assessts/99 Vings.jpg";

const Header = () => {

  const[stickyclass,Setstickyclass]=useState(false);

  useEffect(()=>{
     
    const handlescroll=()=>{

      Setstickyclass(window.scrollY > 220)
    }
    window.addEventListener('scroll',handlescroll);
    return ()=>window.removeEventListener('scroll',handlescroll);
  });


  useEffect(()=>{
    $(document).on('Click','.navbar-nav',function(e) {
      if( $(e.target).is('NavLink') ) {
          $(this).collapse('hide');
      }
  });
  },[])

  return (
    <div className={`${stickyclass ? "sticky":" "} container-fluid p-0`}>

 
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img src={logo} alt="logoimg"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page"   to="/"  exact={true} activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/AboutUs"  exact={true} activeClassName="active">AboutUs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/Gallery" exact={true} activeClassName="active">Gallery</NavLink>
        </li>
       
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Main Menu
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="/Vegitems">Veg-Items</NavLink>
          <NavLink className="dropdown-item" to="/NonVegItems">Non-Veg Items</NavLink>
          <div className="dropdown-divider"></div>
          <NavLink className="dropdown-item" to="/PartyOrders">PartyOrders</NavLink>
        </div>
      </li>

  



        <li className="nav-item">
          <NavLink className="nav-link"  exact={true} activeClassName="active"  to="/ContactUs">ContactUs</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header