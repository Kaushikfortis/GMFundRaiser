import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-copyright">
          <p>&copy; 2023 Temple Renovation Fundraiser</p>
        </div>
        <div className="footer-social">
          <a href="#" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

