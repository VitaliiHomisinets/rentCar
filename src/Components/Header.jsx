import React from 'react'
import Carousel from './Slider'
export default function Header() {
  return (
    <div className='header'>
        <div className='navBar'>
          <div className='logo'>
          <img src="./img/logo.png" alt="" />
        </div>
        <div className='navigation'>
          <ul className='navigationList'>
            <li className='navigationListItem'>Home</li>
            <li className='navigationListItem'>About</li>
            <li className='navigationListItem'>Rent car</li>
          </ul>
        </div>
        <div className='logSig'>
          <button className='log'>Log in</button>
          <button className='sign'>Sign up</button>
        </div>
      </div>
      <div className='land'>
        <div className='landText'>
            <h1>Easy And Fast Way</h1>
            <h1>To Rent Your Car</h1>
            <p style={{maxWidth:'540px'}}>
            We Offer A Wide Range Of Rental Cars To Suit Your Needs. 
            Whether You're Planning A Weekend Getaway, A Business Trip
            </p>
        </div>
        <div className='landImg'>
        <Carousel />
        </div>
        
      </div>
      
     
     
      
    </div>
  )
}
