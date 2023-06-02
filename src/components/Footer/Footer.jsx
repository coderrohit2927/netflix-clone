// NetflixFooter.js

import React from 'react';
import './Footer.scss';

const NetflixFooter = () => {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Help Center</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Cookie Preferences</a>
        </li>
        <li>
          <a href="#">Corporate Information</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <p className="footer-disclaimer">
        &copy; {new Date().getFullYear()} Netflix. All rights reserved.
      </p>
    </footer>
  );
};

export default NetflixFooter;
