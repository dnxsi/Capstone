import React from 'react'
import './index.css'

import restauranfood from './restauranfood.jpg'

const Chicago = () => {
  return (
    <div className="chicago">
      <div className="chicago-image">
        <img src={restauranfood} alt="restauranfood" />
      </div>
      <div className="chicago-content">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
      </div>
    </div>
  )
}

export default Chicago