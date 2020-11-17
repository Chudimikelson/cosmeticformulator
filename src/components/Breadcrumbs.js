import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
import {Link} from 'react-router-dom';

export default function Breadcrumbs({title, category}) {
  return (
    <div >
      <MDBBreadcrumb className='secondGreen text-contrast'>
        <MDBBreadcrumbItem ><Link to='/' className='text-contrast'>HOME</Link></MDBBreadcrumbItem>
        <MDBBreadcrumbItem>{category}</MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>{title}</MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </div>
  )
}

