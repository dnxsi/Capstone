import React from 'react'
import PeopleA from './PeopleA.jpg'
import './index.css'

function Header() {
  return (
    <div className="header-container">
      <div className="header-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean, located on Maldove Street in Chicago, Illinois. We focus on traditional recipes served with a modern twist.</p>
        <button type='button' className="button">Reserve a Table</button>
      </div>
      <div>
        <img src={PeopleA} alt="People"/>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Header