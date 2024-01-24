import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footerBlock'>
        <div className='footerText'>
            <h1 style={{fontWeight:'700'}}>Ready To Get Started?</h1>
            <p>We Stand As Your Trusted Partner. Our Dedication To Quality, Innovation, And Customer Satisfaction Sets Us Apart</p>
            <button className='foooterBtn'>Conatct Us</button>
        </div>
        <div className='footerCarImg'>
          <div className='crug'></div>
          <img src="./car/footerCar.png" alt="" />
        </div>  
        
      </div>
    </div>
  )
}
