import React from 'react';
import logo from  '../assets/logo.png';
import telegramIcon from '../assets/telegram.png';
import twitterIcon from '../assets/twitter.png';
import dexscreenerIcon from '../assets/dexscreener.png';

const Footer = () => {
  return (
    <footer className='bg-dark py-5'>
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-4">
            <a className="fs-2 fw-bold d-flex align-items-center text-decoration-none text-light" href="/">
              <img style={{ width: '60px' }} className='me-3' src={logo} alt="logo" />
              <span className='mt-3'>Taylor Wif Jet</span>
            </a>
          </div>
          <div className="col-lg-8   ">
            <div className='d-flex align-items-center justify-content-end gap-3'>
              <a href="/"><img src={dexscreenerIcon} className='img-fluid' style={{ width: '48px' }} alt="telegram" /></a>
              <a href="/"><img src={twitterIcon} className='img-fluid' style={{ width: '48px' }} alt="telegram" /></a>
              <a href="/" ><img src={telegramIcon} className='img-fluid' style={{ width: '48px' }} alt="telegram" /></a>
            </div>
          </div>
        </div>
        <hr className='text-secondary border-3' />
        <p className='text-light text-center mt-4'>&copy; 2024 TAYLOR WIF JET</p>
      </div>
    </footer>
  )
}

export default Footer;
