import React from "react";
import banner from '../assets/banner.png';
import { ArrowUpRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="text-light bg-dark d-flex align-items-center" >
      <div className="container-fluid">
        <div>
          <h1 className="display-1 fw-bolder text-center mt-5">
            TAYLOR WIF JET
          </h1>
        </div>
        <p className="w-50 text-center mx-auto">
          A MEME COIN CREATED ON SOLANA BLOCKCHAIN ABOUT TAYLOR SWIFT WHO CLAIMS TO BE A GLOBAL 
          WARMING ACTIVIST AND WANTS ONLY GOOD FOR OUR PLANET BUT USING HER JET “ONLY” 300 TIMES 
          A YEAR. THIS PROJECT IS A COMMUNITY TAKEOVER
        </p>
        <div className="d-flex justify-content-center gap-3">
          <button className='btn btn-outline-light btn-lg rounded-5 fs-4 fw-bold border-3 shadow px-4 py-3'>
            JOIN OUR COMMUNITY 
            <ArrowUpRight className="ms-2" />
          </button>
        </div>
        <div className="d-flex justify-content-center mx-auto my-5">
          <img src={banner} className="img-fluid mx-auto shadow-5 rounded-5 w-50" alt="banner" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
