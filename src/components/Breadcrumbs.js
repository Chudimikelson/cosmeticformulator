import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";

export default function Breadcrumbs({title}) {
  return (
    <div>
      <MDBBreadcrumb style={{'background':"#90ee90db"}}>
        <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
        <MDBBreadcrumbItem>Butters & Oils</MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>{title}</MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </div>
  )
}

