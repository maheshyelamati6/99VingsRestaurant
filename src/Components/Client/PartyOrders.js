import React from 'react';
import "./App.css";
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';

const PartyOrders = () => {
  return (
    <div>

        <div className='bread p-0'>
                             <CBreadcrumb>
                             <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
                             <CBreadcrumbItem active>Party Orders</CBreadcrumbItem>
                            </CBreadcrumb>
                             </div>

    </div>
  )
}

export default PartyOrders