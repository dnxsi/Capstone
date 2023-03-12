import React from 'react'
import './index.css'
import pizza from './pizza.jpg'
import greeksalad from './greeksalad.jpg'
import bruchetta from './bruchetta.svg'

const Specials = () => {
  return (
    <>
    <div className="specials-container">
      <h2>Specials</h2>
      <button className="menu-button">Online Menu</button>
    </div>
      <div className="card-container">
        <div className="card">
          <img src={greeksalad} alt="greeksalad" />
          <h3>Greek Salad</h3>
          <h4>$10.00</h4>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
          <a href="#">Order a delivery</a>
        </div>
        <div className="card">
          <img src={pizza} alt="Pizza" />
          <h3>Pizza</h3>
          <h4>$12.00</h4>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
          <a href="#">Order a delivery</a>
        </div>
        <div className="card">
          <img src={bruchetta} alt="Special 3" />
          <h3>Bruchetta</h3>
          <h4>15.00$</h4>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
          <a href="#">Order a delivery</a>
        </div>
      </div>
      </>
  )
}

export default Specials