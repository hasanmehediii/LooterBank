import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

const AdminHome = () => {
  return (
    <div className="admin-home" style={{ backgroundImage: "url('/images/money.jpg')" }}>
      <Navbar />
      <div className="admin-content">
        <h1>Admin Dashboard</h1>
        <p>
          Welcome to the admin panel. Use the navigation bar to manage users, view reports, and configure settings.
        </p>
        {/* Add more admin widgets or links here */}
      </div>
      <Footer />
      <style>{`
        .admin-home {
          min-height: 100vh;
          background: url('/money.jpg') center center/cover no-repeat;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .admin-navbar {
          width: 100%;
          background: rgba(0,0,0,0.7);
          padding: 1rem 0;
        }
        .admin-navbar ul {
          list-style: none;
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }
        .admin-navbar a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
          transition: color 0.2s;
        }
        .admin-navbar a:hover {
          color: #ffd700;
        }
        .admin-content {
          background: rgba(255,255,255,0.85);
          padding: 2rem 3rem;
          border-radius: 12px;
          margin-top: 3rem;
          box-shadow: 0 4px 24px rgba(0,0,0,0.1);
          text-align: center;
        }
        .admin-content h1 {
          margin-bottom: 1rem;
          color: #2e7d32;
        }
        .admin-content p {
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default AdminHome;