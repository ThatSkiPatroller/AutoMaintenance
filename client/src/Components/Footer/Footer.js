
import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <div>
      <hr />
      <div className="footer-links">
        <div className="logo-container">
          <a href="http://">
            <h3>Auto Maintenance</h3>
          </a>
        </div>
        <div className="list-group">
          <h4>Company</h4>
          <ul>
            <li>Our Team</li>
            <li>Blog</li>
            <li>Pricing Trends</li>
          </ul>
        </div>
        <div className="list-group">
          <h4>For Dealers</h4>
          <ul>
            <li>Dealer Signup</li>
            <li>Dealer Resources</li>
          </ul>
        </div>
        <div className="list-group">
          <h4>Help</h4>
          <ul>
            <li>Help</li>
            <li>Contact Us</li>
            <li>Tips for Selling</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        Copyright © 2021. Auto Maintenance. All Right Reserved.
      </div>
    </div>
  );
}
