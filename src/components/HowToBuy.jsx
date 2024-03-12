import React from 'react';
import image from '../assets/meme12.jpg';
import telegram from '../assets/telegram.png';
import twitter from '../assets/twitter.png';

const HowToBuy = () => {
  return (
    <section className='bg-dark text-light py-5' id="howtobuy">
      <div className="container">
        <h2 className='text-danger display-1 fw-bold'>HOW TO BUY $SWIFT?</h2>
          <div className="row mt-5 g-5 align-items-center">
            <div className="col-lg-5">
              <img src={image} className='img-fluid w-100 rounded-5 shadow-lg' alt="" />
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card text-bg-dark border-danger mb-3" style={{ minHeight: '260px' }}>
                    <div className="card-header border-danger">Step 1</div>
                    <div className="card-body">
                      <h5 className="card-title">CLICK "BUY NOW"</h5>
                      <a href='https://raydium.io/swap/?outputCurrency=wcLXwY2Wj91xc4VjYWoK8VbzcmMyEofbTk6njVWYJDc' target='_blank' className='btn btn-outline-danger btn-lg rounded-5 fw-bold border-3 shadow my-3'>BUY NOW</a>
                      <p className="card-text">The button will take you to Raydium</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card text-bg-dark border-danger mb-3" style={{ minHeight: '260px' }}>
                    <div className="card-header border-danger">Step 2</div>
                    <div className="card-body">
                      <h5 className="card-title">CONNECT YOUR WALLET</h5>
                      <p className="card-text">Make sure you have SOL in your wallet to be able to trade.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card text-bg-dark border-danger mb-3" style={{ minHeight: '260px' }}>
                    <div className="card-header border-danger">Step 3</div>
                    <div className="card-body">
                      <h5 className="card-title">CLICK SWAP!</h5>
                      <p className="card-text">
                        Put in the contract: wcLXwY2Wj91xc4VjYWoK8VbzcmMyEofbTk6njVWYJDc
                      </p>
                      <p className="card-text">
                        Once you've chosen the amount of $SWIFT you want, simply click swap!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card text-bg-dark border-danger mb-3" style={{ minHeight: '260px' }}>
                    <div className="card-header border-danger">Step 4</div>
                    <div className="card-body">
                      <h5 className="card-title mb-4">JOIN THE FANCLUB!</h5>
                      <div className='d-flex align-items-center flex-wrap gap-3'>
                        <a href='https://t.me/TaylorWifJet_Community_Portal' target='_blank' className='btn btn-outline-danger btn-lg rounded-5 fw-bold border-3 shadow d-flex align-items-center gap-2'>
                          TELEGRAM 
                          <img src={telegram} className='img-fluid' style={{ width: '32px' }} alt="telegram" />
                        </a>
                        <a href='https://twitter.com/taylorwifjetsol' target='_blank' className='btn btn-outline-danger btn-lg rounded-5 fw-bold border-3 shadow'>
                          TWITTER
                          <img src={twitter} className='img-fluid' style={{ width: '32px' }} alt="telegram" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default HowToBuy;
