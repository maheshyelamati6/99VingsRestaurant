import React, { useState } from 'react';
import "./App.css";

import {
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'

import logo from "./Assessts/99 Vings.jpg";

const Header = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>



<CNavbar expand="lg" className="navbar">
      <CContainer fluid>
        <CNavbarBrand href="/"><img src={logo} alt="bannerimg"/></CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse justify-content-end" visible={visible}>
          <CNavbarNav className="navbar-nav">
            <CNavItem>
              <CNavLink href="/">
                Home
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink href="Aboutus">Aboutus</CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink href="Gallery">Gallery</CNavLink>
            </CNavItem>

            

            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">Menu Card</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">VEG Items</CDropdownItem>
                <CDropdownItem href="#">NON-VEG Items</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Party Orders</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <CNavLink href="ContactUs" >
                ContactUS
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
         
        </CCollapse>
      </CContainer>
    </CNavbar>



    </div>
  )
}

export default Header