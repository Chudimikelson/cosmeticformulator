import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
import {Link} from 'react-router-dom';

export default function Breadcrumbs() {
  return (
    <div className="container-fluid" >
      <MDBBreadcrumb className='secondGreen text-contrast'>
        <MDBBreadcrumbItem><Link to='/OILS-and-BUTTERS' className='lead text-contrast'>BUTTERS & OILS</Link></MDBBreadcrumbItem>
        <MDBBreadcrumbItem><Link to='/SURFACTANTS' className='lead text-contrast'>SURFACTANTS</Link></MDBBreadcrumbItem>
        <MDBBreadcrumbItem><Link to='/STABILIZERS' className='lead text-contrast'>EMULSIFIERS & STABILIZERS</Link></MDBBreadcrumbItem>
        <MDBBreadcrumbItem><Link to='/PRESERVATIVES' className='lead text-contrast'>PRESERVATIVES</Link></MDBBreadcrumbItem>
        <MDBBreadcrumbItem><Link to='/COSMECEUTICALS' className='lead text-contrast'>ACTIVES & COSMECEUTICALS</Link></MDBBreadcrumbItem>
        <MDBBreadcrumbItem><Link to='/ADDITIVES' className='lead text-contrast'>ADDITIVES</Link></MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </div>
  )
}