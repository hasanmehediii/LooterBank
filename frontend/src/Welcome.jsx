import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-page">
      <nav className="navbar navbar-expand-lg navbar-dark glassmorphic-nav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">LooterBank</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Cards</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">FAQ</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="btn btn-outline-light rounded-pill px-4" to="/login">Sign in</Link>
              </li>
              <li className="nav-item ms-2">
                <Link className="btn btn-primary gradient-button rounded-pill px-4" to="/signup">Get Started</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="hero-section d-flex align-items-center text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold mb-4">Pay, invest money & save you money with a <span className="highlight-text">single bank</span></h1>
              <p className="lead mb-4">Extract your money without commissions anywhere in the world</p>
              <div className="d-flex">
                <Link className="btn btn-lg gradient-button rounded-pill px-5 py-3 me-3 pulse-glow" to="/signup">Get Started</Link>
                <Link className="btn btn-lg btn-outline-light rounded-pill px-5 py-3" to="/learn-more">Learn more</Link>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center position-relative">
              {/* Placeholder for 3D card and coin visuals */}
              <div className="floating-card"></div>
              <div className="floating-coin"></div>
            </div>
          </div>
        </div>
      </header>

      <section className="stats-section py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="stat-card p-4 rounded-3 shadow-sm">
                <h3 className="display-5 fw-bold">0%</h3>
                <p className="lead">Commissions</p>
                <Link to="#" className="learn-more-link">Learn more &rarr;</Link>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="stat-card p-4 rounded-3 shadow-sm">
                <h3 className="display-5 fw-bold">12%</h3>
                <p className="lead">Cashback</p>
                <Link to="#" className="learn-more-link">Learn more &rarr;</Link>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="stat-card p-4 rounded-3 shadow-sm">
                <h3 className="display-5 fw-bold">54%</h3>
                <p className="lead">Customers</p>
                <Link to="#" className="learn-more-link">Learn more &rarr;</Link>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="stat-card p-4 rounded-3 shadow-sm">
                <h3 className="display-5 fw-bold">9.3b</h3>
                <p className="lead">Investments</p>
                <Link to="#" className="learn-more-link">Learn more &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;