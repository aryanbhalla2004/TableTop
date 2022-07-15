import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="main_footer">
        <div className="content-sizing-box main_footer_links">
          <section className="main_footer_content">
            <div>
              <h5>Support</h5>
            </div>
            <ul>
              <li>
                <Link to="/" className="Link">Help Centre</Link>
              </li>
              <li>
                <Link to="/" className="Link">Live Chat</Link>
              </li>
              <li>
                <Link to="/" className="Link">Account Issue</Link>
              </li>
              <li>
                <Link to="/" className="Link">Report Spam</Link>
              </li>
              <li>
                <Link to="/" className="Link">Cancellation Options</Link>
              </li>
              <li>
                <Link to="/" className="Link">COVID-19 Response</Link>
              </li>
            </ul>
          </section>
          <section className="main_footer_content">
            <div>
              <h5>Get to Know Us</h5>
            </div>
            <ul>
              <li>
                <Link to="/" className="Link">About Us</Link>
              </li>
              <li>
                <Link to="/" className="Link">Blog</Link>
              </li>
              <li>
                <Link to="/" className="Link">Socialize</Link>
              </li>
              <li>
                <Link to="/" className="Link">Quickmunch</Link>
              </li>
              <li>
                <Link to="/" className="Link">Perks</Link>
              </li>
              <li>
                <Link to="/" className="Link">FAQ</Link>
              </li>
            </ul>
          </section>
          <section className="main_footer_content">
            <div>
              <h5>Doing Business</h5>
            </div>
            <ul>
              <li>
                <Link to="/" className="Link">Suggest an Idea</Link>
              </li>
              <li>
                <Link to="/" className="Link">Be a Partner restaurant</Link>
              </li>
              <li>
                <Link to="/" className="Link">Create an Account</Link>
              </li>
              <li>
                <Link to="/" className="Link">Help</Link>
              </li>
            </ul>
          </section>
          <section className="main_footer_content">
            <div>
              <h5>Hosting</h5>
            </div>
            <ul>
              <li>
                <Link to="/" className="Link">Try Hosting</Link>
              </li>
              <li>
                <Link to="/" className="Link">Account Issue</Link>
              </li>
              <li>
                <Link to="/" className="Link">Report Spam</Link>
              </li>
              <li>
                <Link to="/" className="Link">Cancellation Options</Link>
              </li>
              <li>
                <Link to="/" className="Link">COVID-19 Response</Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="social-media-icons-footer">
        <ul>
          <li><FaFacebookF/></li>
          <li><FaTwitter/></li>
          <li><FaInstagram/></li>
          <li><FaGoogle/></li>
          <li><FaYoutube/></li>
        </ul>
      </div>
      <footer>
        <div className="content-sizing-box footer-container">
          <p>© TableTop - 2022 | All Right Reserved</p>
          <ul>
            <li><a>Privacy Policy</a></li>
            <li><a>Terms & Aggrement</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;