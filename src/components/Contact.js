import React from 'react';
import './Contact.css';
import contactImageFull from '../assets/Contact.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <div className="contact-left">
          <div className="contact-image-full">
            <img src={contactImageFull} alt="Contact Full" />
          </div>
          <div className="contact-description">
            <p><strong>Email :</strong> deepkiran.cs@gmail.com</p>
            <p><strong>Phone No:</strong> +91 9855297773</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/kirandeep--kaur/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/kirandeep--kaur/</a></p>
          </div>
        </div>
        <div className="contact-form-info">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit">Contact Us</button>
          </form>
          <div className="contact-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="facebook-icon" />
            </a>
            <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className="whatsapp-icon" />
            </a>
            <a href="https://www.linkedin.com/in/kirandeep--kaur/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="linkedin-icon" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="instagram-icon" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="twitter-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
