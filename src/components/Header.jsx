import React from 'react'

function Header() {
  return (
    <div>
        <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span class="fs-4">Edupoly</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><Link to="/" class="nav-link active" aria-current="page">Home</Link></li>
        <li class="nav-item"><Link to="/price" class="nav-link">Pricing</Link></li>
        <li class="nav-item"><Link to="/aboutus" class="nav-link">About</Link></li>
        <li class="nav-item"><Link to="/studentRegistration" class="nav-link">Registration</Link></li>
        <li class="nav-item"><Link to="/countries" class="nav-link">Countries</Link></li>
      </ul>
    </header>
  </div>
     </div>
  )
}

export default Header;