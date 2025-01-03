import React from 'react';
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';

const Vegitems = () => {
  return (
    <div>

       <div className='bread p-0'>
             <CBreadcrumb>
             <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
             <CBreadcrumbItem active>Vegitems</CBreadcrumbItem>
            </CBreadcrumb>
             </div>

             


    </div>
  )
}

export default Vegitems