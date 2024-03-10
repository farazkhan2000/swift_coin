import React from 'react';
import image from '../assets/meme12.jpg';

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
                      <button className='btn btn-outline-danger btn-lg rounded-5 fw-bold border-3 shadow my-3'>BUY NOW</button>
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
                        Once you've chosen the amount of $BENJI you want, simply click swap!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card text-bg-dark border-danger mb-3" style={{ minHeight: '260px' }}>
                    <div className="card-header border-danger">Step 4</div>
                    <div className="card-body">
                      <h5 className="card-title mb-4">JOIN THE FANCLUB!</h5>
                      <button className='btn btn-outline-danger btn-lg rounded-5 fw-bold border-3 shadow'>TELEGRAM</button>
                      <button className='btn btn-outline-danger btn-lg rounded-5 fw-bold border-3 shadow ms-2'>TWITTER</button>
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
