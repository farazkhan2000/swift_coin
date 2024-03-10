import React from "react";
import banner from '../assets/banner.png';
import { ArrowUpRight } from 'lucide-react';
import jetImage from '../assets/jet.webp';

const HeroSection = () => {
  return (
    <section className="text-light bg-dark d-flex align-items-center position-relative " >
      <div className="container z-1">
        <div>
          <h1 className="display-1 fw-bolder text-center mt-5 text-danger">
            TAYLOR WIF JET
          </h1>
        </div>
        <p className="w-50 text-center mb-5 mx-auto fs-4">
          {/* INTRODUCING SWIFTCOIN: THE TAYLOR SWIFT-INSPIRED MEME COIN ON SOLANA. JOIN THE FUN AS WE BLEND HUMOR, 
          CRYPTO, AND ENVIRONMENTAL ACTIVISM IN A COMMUNITY-DRIVEN PROJECT. WELCOME TO THE SWIFTCOIN REVOLUTION! */}
          HI, MY NAME IS TAYLOR AND I COME WITH A WIF JET.  
        </p>
        <div className="d-flex justify-content-center gap-3">
          <button className='btn btn-outline-danger btn-lg rounded-5 fs-4 fw-bold border-3 shadow px-4 py-3'>
            JOIN OUR COMMUNITY 
            <ArrowUpRight className="ms-2" />
          </button>
        </div>
        <div className="d-flex justify-content-center mx-auto my-5">
          <img src={banner} className="img-fluid mx-auto shadow-5 rounded-5 w-75 mt-4" alt="banner" />
        </div>
      </div>
      <img src={jetImage} className="position-absolute z-0 bottom-0 start-0 opacity-25" alt="jet" />
    </section>
  );
};

export default HeroSection;
