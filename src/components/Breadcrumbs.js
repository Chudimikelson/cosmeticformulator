import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
import {Link} from 'react-router-dom';

export default function Breadcrumbs({title, category}) {
  return (
    <div>
      <MDBBreadcrumb style={{'background':"#90ee90db"}}>
        <MDBBreadcrumbItem ><Link to='/'>HOME</Link></MDBBreadcrumbItem>
        <MDBBreadcrumbItem>{category}</MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>{title}</MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </div>
  )
}

