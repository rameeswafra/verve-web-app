import React from 'react'
import {Link} from "react-router-dom";
import {AiOutlineDingding} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Join with us to receive our best products
        </p>
        <p className='footer-subscription-text'>
            Sri Lanka's best online product store
        </p>
        
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <AiOutlineDingding/>
            </Link>
          </div>
          <small class='website-rights'>TRVL © 2022</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/profile.php?id=100081568363121'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook/>
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/verveemarket/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram/>
            </a>
            <a
              class='social-icon-link youtube'
              href='https://www.youtube.com/channel/UCNAOhvUkfR5Ze6BLke8MQlg'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube/>
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/Verve56028753'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter/>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
