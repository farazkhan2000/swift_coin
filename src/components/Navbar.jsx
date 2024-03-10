import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-md-4 shadow">
        <div className="container-fluid d-flex align-items-center">
          <a className="navbar-brand fs-2 fw-bold d-flex align-items-center" href="/">
            <img style={{ width: '60px' }} className='me-3' src={logo} alt="logo" />
            <span className='mt-3'>Taylor Wif Jet</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto gap-4 mt-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">HOW TO BUY?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">ROADMAP</a>
              </li>
            </ul>
            <button className='btn btn-outline-light btn-lg rounded-5 fw-bold border-3 shadow px-4 py-3 ms-5'>JOIN TELEGRAM</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
