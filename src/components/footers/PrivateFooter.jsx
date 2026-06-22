import React from "react";
import "./PrivateFooter.css";

const PrivateFooter = () => {
  return (
    <footer className="private-footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="logo">Socio</div>
          <p className="tagline">
            A private space to connect, share, and grow.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div className="link-column">
            <h4>Platform</h4>
            <a href="#">Feed</a>
            <a href="#">Messages</a>
            <a href="#">Notifications</a>
          </div>

          <div className="link-column">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>

          <div className="link-column">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
        </div>

        {/* Social */}
        <div className="footer-social">
          <button className="social-btn">in</button>
          <button className="social-btn">X</button>
          <button className="social-btn">GH</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ConnectSphere. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default PrivateFooter;