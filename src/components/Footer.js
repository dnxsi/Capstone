import React from 'react'

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-links">
        <div className="footer-links_div">
          <h4>Navigation</h4>
          <p>Home</p>
          <p>About</p>
          <p>Menu</p>
          <p>Reservation</p>
          <p>Order Online</p>
          <p>Login</p>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <p>Terms & Policy</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Get in Touch</h4>
          <p>Adress</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2023 Little Lemon. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer