import React from 'react';
import logo from '../assets/logo.png';
import { motion } from "framer-motion";
import twitter from '../assets/twitter.png';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-md-4 shadow">
        <div className="container-fluid d-flex align-items-center">
          <a href="/" className="navbar-brand d-flex align-items-center z-1">
            <img style={{ width: '48px' }} className='me-3' src={logo} alt="logo" />
            <span className='mt-3 fs-5 fs-md-2 fw-bold'>Taylor Wif Jet</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-lg-auto gap-4 mt-4 mt-lg-2">
              <li className="nav-item">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }} 
                  className="nav-link active fs-4 text-center" 
                  aria-current="page" 
                  href="/"
                >
                  HOME
                </motion.a>
              </li>
              <li className="nav-item">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }} 
                  className="nav-link fs-4 text-center" 
                  aria-current="page" 
                  href="#about"
                  >
                    ABOUT
                  </motion.a>
              </li>
              <li className="nav-item">
                <motion.a 
                  className="nav-link fs-4 text-center" 
                  href="#howtobuy"
                >
                  HOW TO BUY?
                </motion.a>
              </li>
            </ul>
            <div className=' d-flex justify-content-center justify-content-md-start'>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} 
                href='https://t.me/SWIFTWIFJET_COMMUNITY' 
                target='_blank' 
                className='btn btn-outline-danger btn-lg rounded-5 fw-bold border-3 shadow px-4 mt-4 mt-lg-0 mb-5 mb-lg-0 py-2 py-lg-3 ms-lg-5'
              >
                JOIN TELEGRAM 
                <img src={twitter} className='img-fluid ms-3' style={{ width: '32px' }} alt="telegram" />
              </motion.a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
