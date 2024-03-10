import React from 'react';
import aboutImage from '../assets/about.png';
import meme1 from '../assets/meme1.jpg';
import meme2 from '../assets/meme2.jpg';
import meme3 from '../assets/meme3.jpg';
import meme4 from '../assets/meme4.jpg';
import meme5 from '../assets/meme5.jpg';
import meme6 from '../assets/meme6.jpg';
import meme7 from '../assets/meme7.jpg';
import meme8 from '../assets/meme8.jpg';
import meme9 from '../assets/meme9.jpg';

const About = () => {
  return (
    <section className='bg-dark text-light py-5' id="about">
      <div className="container">
        <h2 className='text-danger display-1 fw-bold'>About</h2>
        <h4 className='text-light text-center display-5 my-4 fw-bold'>TAYLOR SWIFT THE GLOBAL ACTIVIST</h4>
        <div className="row align-items-center g-5 mt-4">
          <div className="col-lg-8">
            <p className=''>
              Taylor Swift, the pop sensation, has recently been making headlines for her private jet's excessive CO2 
              emissions. But did you know that her jet's emissions are so high, they're practically minting their own 
              cryptocurrency? Just imagine if each mile flown was a new crypto token - SwiftCoin, anyone?
            </p>
            <p className=''>
              Oh, for the love of Satoshi Nakamoto! Taylor Swift's private jet has been burning more CO2 than a Bitcoin 
              mining farm on steroids! Who needs a private jet when you can just fly on the wings of a digital currency? 
              But hey, maybe Taylor's jet is secretly powered by Ethereum gas fees. After all, those fees are sky-high, so 
              why not use them to fuel her jet? Just imagine her jet soaring through the clouds, powered by the collective 
              frustration of Ethereum users trying to make a simple transaction.
            </p>
          </div>
          <div className="col-lg-4 d-flex justify-content-end">
            <img src={aboutImage} className='w-100 img-fluid shadow-lg rounded-5' alt="about" />
          </div>
        </div>
        <h2 className='text-danger display-1 fw-bold mt-5'>About</h2>
        <div className="row my-5 g-4">
          <div className="col-lg-4">
            <img src={meme1} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </div>
          <div className="col-lg-4">
            <img src={meme2} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </div>
          <div className="col-lg-4">
            <img src={meme3} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </div>
          <div className="col-lg-4">
            <img src={meme4} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </div>
          <div className="col-lg-4">
            <img src={meme5} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </div>
          <div className="col-lg-4">
            <img src={meme6} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </div>
          <div className="col-lg-4">
            <img src={meme7} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </div>
          <div className="col-lg-4">
            <img src={meme8} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </div>
          <div className="col-lg-4">
            <img src={meme9} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
