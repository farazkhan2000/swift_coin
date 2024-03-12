import React from "react";
import banner from '../assets/banner.png';
import { ArrowUpRight } from 'lucide-react';
import jetImage from '../assets/jet.webp';
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="text-light bg-dark d-flex align-items-center position-relative " >
      <div className="container z-1">
        <div>
          <h1 className="display-1 fw-bolder text-center mt-5 text-danger z-1">
            TAYLOR WIF JET
          </h1>
        </div>
        <p className="w-50 text-center mb-5 mx-auto fs-5 fs-lg-4 z-1">
          HI, MY NAME IS TAYLOR AND I COME WIF A JET.  
        </p>
        <div className="d-flex justify-content-center gap-3">
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            href='https://t.me/SWIFTWIFJET_COMMUNITY'
             target='_blank' 
             className='btn btn-outline-danger btn-lg rounded-5 fs-5 fs-md-4 fw-bold border-3 shadow px-4 py-3 z-1'
             >
              JOIN OUR COMMUNITY 
              <ArrowUpRight className="ms-2" />
          </motion.a>
        </div>
        <div className="d-flex justify-content-center mx-auto my-5">
          <img src={banner} className="img-fluid mx-auto shadow-5 rounded-5 w-75 mt-4" alt="banner" />
        </div>
      </div>
      <div 
        className="position-absolute bottom-0 start-0"
      >
        <img src={jetImage} className="img-fluid z-0 opacity-25 z-1" alt="jet" />
      </div>
    </section>
  );
};

export default HeroSection;
