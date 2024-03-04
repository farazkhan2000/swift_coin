import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand fs-1" href="/">MOAI</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active mx-2" aria-current="page" href="#">UNGA BUNGA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="/">HOW TO BUY?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="/">ROADMAP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="/">FAQS</a>
              </li>
            </ul>

            <button className="btn btn-primary px-4 py-2 fw-semibold" >BUY NOW</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
