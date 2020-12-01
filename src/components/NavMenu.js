import React from 'react'

export default function NavMenu() {
  return (
    <div>
      <nav class="navbar navbar-expand-md navigation sidebar-left block bg-contrast">
        <div class="container py-4">
          <div class="collapse navbar-collapse ml-auto">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item"><Link class="nav-link" to="/">Home</Link></li>
              <li class="nav-item dropdown"><button class="nav-link dropdown-toggle" data-toggle="dropdown">Dropdown link</button>
                  <div class="dropdown-menu p-3"><button class="dropdown-item">About</button> <button class="dropdown-item">Services</button> <button class="dropdown-item">Blog</button></div>
              </li>
              <li class="nav-item dropdown"><button class="nav-link dropdown-toggle" data-toggle="dropdown" >Right align</button>
                <div class="dropdown-menu dropdown-menu-right p-3">
                  <button class="dropdown-item">About</button> 
                  <button class="dropdown-item">Services</button> 
                  <button class="dropdown-item">Blog</button>
                </div>
              </li>
              <li class="nav-item dropdown mega"><button class="nav-link dropdown-toggle" data-toggle="dropdown">Multi column</button>
                <div class="dropdown-menu dropdown-menu-right p-3">
                  <div class="row">
                    <div class="col-md-4">
                        <p class="dropdown-heading bold mt-0 pt-0">Company</p><button class="dropdown-item">About</button> <button class="dropdown-item">Services</button> <button class="dropdown-item">Blog</button>
                    </div>
                    <div class="col-md-4">
                        <p class="dropdown-heading bold mt-0 pt-0">Product</p><button class="dropdown-item">Features</button> <button class="dropdown-item">Customers</button> <button class="dropdown-item">Documentation</button>
                    </div>
                    <div class="col-md-4">
                        <p class="dropdown-heading bold mt-0 pt-0">Channels</p><button class="dropdown-item">Careers</button> <button class="dropdown-item">Contact</button> <button class="dropdown-item">Search</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
