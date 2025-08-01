import React from 'react';
import '../Css/HelpPage.css';
import Navbar from './Navbar';
import Footer from './Footer';

const HelpPage = () => {
  return (
    <>
<Navbar variant="default" />
    <div className="help-container">
      <h1 className="help-title">Help & Support</h1>
      <p className="help-intro">
        Welcome to our Help Center. Here you'll find answers to frequently asked questions and guidance on using our website.
      </p>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>

        <div className="faq">
          {/* <h3>🧑‍🌾 For Farmers</h3>
          <ul>
            <li>How can I list my agricultural products?</li>
            <li>Can I sell organic produce?</li>
            <li>How do I track my orders?</li>
          </ul> */}

          <h3>🛒 For Buyers</h3>
          <ul>
            <li>How do I place an order?</li>
            <li>What payment methods are accepted?</li>
            <li>What if my order is delayed?</li>
          </ul>

          <h3>🔐 Account & Login</h3>
          <ul>
            <li>How do I create an account?</li>
            <li>I forgot my password, what should I do?</li>
            <li>Can I change my email address?</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact Support</h2>
        <p>Email us at: <a href="mailto:support@yourwebsite.com">support@yourwebsite.com</a></p>
        <p>Call us: +91-9309205438</p>
        {/* <p>Live chat: Available 9 AM - 6 PM IST</p> */}
      </div>

      {/* Policies */}
      <div className="policy-section">
        <h2>Useful Links</h2>
        <ul>
          <li><a href="#">Return & Refund Policy</a></li>
          <li><a href="#">Shipping Information</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default HelpPage;
