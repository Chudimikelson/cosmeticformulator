import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";

export default function Breadcrumbs({title}) {
  return (
    <div>
      <MDBBreadcrumb light color="secondary">
        <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
        <MDBBreadcrumbItem>Butters & Oils</MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>{title}</MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </div>
  )
}

