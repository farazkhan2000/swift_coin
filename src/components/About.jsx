import React from 'react';
import meme1 from '../assets/meme1.jpg';
import meme2 from '../assets/meme2.jpg';
import meme3 from '../assets/meme3.jpg';
import meme4 from '../assets/meme4.jpg';
import meme5 from '../assets/meme5.jpg';
import meme6 from '../assets/meme6.jpg';
import meme7 from '../assets/meme7.jpg';
import meme8 from '../assets/meme8.jpg';
import meme13 from '../assets/meme13.jpg';
import chart from '../assets/chart.png';
import telegram from '../assets/telegram.png';
import twitter from '../assets/twitter.png';
import ca from '../assets/ca.png';
import email from '../assets/email.png';
import taylorJetVideo from  '../assets/taylorJetVideo.mp4';
import { motion } from "framer-motion";

const About = () => {

  function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    // Optionally, provide some feedback to the user
    alert('Address copied to clipboard!');
  }

  return (
    <section className='bg-dark text-light py-5' id="about">
      <div className="container">
        <h2 className='text-danger display-1 fw-bold'>About</h2>
        <h4 className='text-light text-center display-5 pt-5 fw-bold'>TAYLOR SWIFT THE GLOBAL ACTIVIST</h4>
        <div className="row align-items-center g-5 mt-4 py-3">
          <div className="col-lg-6">
            {/* <p className=''>
              INTRODUCING TAYLOR SWIFT, THE ULTIMATE POP DIVA WHOSE PRIVATE JET HAS BECOME THE TALK OF THE TOWN—THANKS TO 
              ITS EMISSIONS RIVALING A CRYPTOCURRENCY MINING OPERATION! IMAGINE IF EACH MILE FLOWN BY HER JET WERE TO SPAWN 
              A NEW CRYPTO TOKEN—ENTER SWIFTCOIN, THE SKY-HIGH SENSATION!
            </p> */}
            <p className='mb-0 fs-2'>
              {/* IN THE WILD WORLD OF DIGITAL CURRENCIES, TAYLOR SWIFT'S JET EMISSIONS PUT EVEN THE MOST VIGOROUS BITCOIN 
              MINERS TO SHAME. WHO NEEDS WINGS WHEN YOU CAN RIDE THE WAVE OF A DIGITAL CURRENCY? PERHAPS TAYLOR'S JET IS 
              FUELED BY ETHEREUM GAS FEES—AFTER ALL, WHY LET THOSE SKY-HIGH FEES GO TO WASTE? PICTURE HER JET CRUISING 
              THE CLOUDS, POWERED BY THE COLLECTIVE SIGHS OF ETHEREUM USERS WRESTLING WITH TRANSACTION WOES. IT'S A SKY-HIGH
              SPECTACLE LIKE NO OTHER! */}
              PPL TELL ME I SHOULD JEET THE JET, BUT THEN HOW ARE WE GOING TO GET TO THE MOON? BUT I UNDERSTAND YOUR CONCERN 
              MY FRIENDS. I TOO WORRY ABOUT TREES AND STUFF. I WILL GIVE AWAY 1% OF MY BELOVED $SWIFT TO HELP OFFSET THE JET 
              CARBS SO THAT WE CAN TRAVEL LIGHT AS A COMMUNITY.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <video className='w-100' muted loop autoPlay>
              <source src={taylorJetVideo} type="video/mp4" />
              Taylor Swift Jet
            </video>
          </div>
        </div>
        <h2 className='text-danger display-1 fw-bold mt-5'>STORY</h2>
        <p className=''>You can call us the <span className='text-danger'>$SWIFT</span></p>
        <div className="row mt-5 g-4">
          <motion.div whileHover={{ scale: 1.2 }} className="col-lg-4">
            <a  href="https://dexscreener.com/solana/6uybx1x8yucfj8ystpyizbyg7uqzaq2s46zwphumkjg5" target='_blank' className='text-decoration-none'>
              <div className="card text-bg-dark border-light pt-4">
                <img src={chart} className="card-img-top img-fluid mx-auto" style={{ width: '58px' }} alt="chart" />
                <div className="card-body">
                  <p className="card-text text-center mb-0">CHART - DEXSCREENER</p>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="col-lg-4">
            <a href="https://t.me/taylorwifjetmeme" target='_blank' className='text-decoration-none'>
              <div className="card text-bg-dark border-light pt-4">
                <img src={telegram} className="card-img-top img-fluid mx-auto" style={{ width: '58px' }} alt="chart" />
                <div className="card-body">
                  <p className="card-text text-center mb-0">TELEGRAM</p>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="col-lg-4">
            <a href="https://twitter.com/taylorwifjet" target='_blank' className='text-decoration-none'>
              <div className="card text-bg-dark border-light pt-4">
                <img src={twitter} className="card-img-top img-fluid mx-auto" style={{ width: '58px' }} alt="chart" />
                <div className="card-body">
                  <p className="card-text text-center mb-0">TWITTER</p>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="col-lg-8">
            <a className='text-decoration-none' onClick={() => copyToClipboard('wcLXwY2Wj91xc4VjYWoK8VbzcmMyEofbTk6njVWYJDc')}>
              <div className="card text-bg-dark border-light pt-4">
                <img src={ca} className="card-img-top img-fluid mx-auto" style={{ width: '58px' }} alt="chart" />
                <div className="card-body">
                  <p className="card-text text-center mb-0">wcLXwY2Wj91xc4VjYWoK8VbzcmMyEofbTk6njVWYJDc</p>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="col-lg-4">
            <a href="/" className='text-decoration-none'>
              <div className="card text-bg-dark border-light pt-4">
                <img src={email} className="card-img-top img-fluid mx-auto" style={{ width: '58px' }} alt="chart" />
                <div className="card-body">
                  <p className="card-text text-center mb-0">contact@taylorwifjet.xyz</p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
        <div className="row my-5 g-4">
          <motion.div whileHover={{ scale: 1.1 }} className="col-lg-4">
            <img src={meme3} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-lg-4">
            <img src={meme4} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-lg-4">
            <img src={meme6} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-lg-4">
            <img src={meme5} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-lg-4">
            <img src={meme2} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-lg-4">
            <img src={meme8} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-lg-4">
            <img src={meme1} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-lg-4">
            <img src={meme13} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-lg-4">
            <img src={meme7} className='img-fluid w-100 img-thumbnail shadow-lg' alt="meme" />
          </motion.div>  
        </div>
      </div>
    </section>
  )
}

export default About;

