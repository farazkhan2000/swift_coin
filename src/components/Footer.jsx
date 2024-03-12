import React from "react";
import logo from "../assets/logo.png";
import telegramIcon from "../assets/telegram.png";
import twitterIcon from "../assets/twitter.png";
import dexscreenerIcon from "../assets/dexscreener.png";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row align-items-center mb-5 g-5">
          <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-md-start">
            <a
              className="fs-2 fw-bold d-flex align-items-center text-decoration-none text-light"
              href="/"
            >
              <img
                style={{ width: "48px" }}
                className="me-3"
                src={logo}
                alt="logo"
              />
              <span className="mt-3 fs-5 fs-md-2 fw-bold">Taylor Wif Jet</span>
            </a>
          </div>
          <div className="col-12 col-sm-6">
            <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} 
                href="https://dexscreener.com/solana/3sk6wjt4m4bjnf22qrsz7ljlmha8n9s2epeyg2ejja6b"
                target="_blank"
              >
                <img
                  src={dexscreenerIcon}
                  className="img-fluid"
                  style={{ width: "48px" }}
                  alt="telegram"
                />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} 
                href="https://twitter.com/taylorwifjetsol" 
                target="_blank"
              >
                <img
                  src={twitterIcon}
                  className="img-fluid"
                  style={{ width: "48px" }}
                  alt="telegram"
                />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} 
                href="https://t.me/TaylorWifJet_Community_Portal" 
                target="_blank"
              >
                <img
                  src={telegramIcon}
                  className="img-fluid"
                  style={{ width: "48px" }}
                  alt="telegram"
                />
              </motion.a>
            </div>
          </div>
        </div>
        <hr className="text-secondary border-3" />
        <p className="text-light text-center mt-4">
          &copy; 2024 TAYLOR WIF JET
        </p>
      </div>
    </footer>
  );
};

export default Footer;
