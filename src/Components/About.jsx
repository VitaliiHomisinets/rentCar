import React from 'react'
import { BiSupport } from "react-icons/bi";
import { MdVerifiedUser } from "react-icons/md";
import { PiMedalFill } from "react-icons/pi";
import { ImCross } from "react-icons/im";
export default function About() {
  return (
    <div className='about'>
        <h1 style={{fontWeight:'700'}}>Why <span style={{color:'#3FB6F0',}}>Choose</span> Us</h1>
        <p className='subTitleAbout'>
            We Stand As Your Trusted Partner.
            Our Dedication To Quality, Innovation, And Customer Satisfaction Sets Us Apart
         </p>
        <div className='abotCardBlock'>
            <div className='aboutCardItem'>
                <div className='aboutCardItemIcon'>
                    <BiSupport style={{width:'40px',height:'40px'}} />
                </div>
                <div className='aboutCardItemText'>
                    <h3 style={{margin:'0'}}>24 Hour Support</h3>
                    <p style={{fontSize:'15px', maxWidth:'370px'}}>Our round-the-clock support is ready to answer any of your questions in the same minute</p>
                </div>
            </div>
             <div className='aboutCardItem'>
                <div className='aboutCardItemIcon'>
                    <MdVerifiedUser style={{width:'40px',height:'40px'}} />
                </div>
                <div className='aboutCardItemText'>
                    <h3 style={{margin:'0'}}>Verified License</h3>
                    <p style={{fontSize:'15px', maxWidth:'370px'}}>All machines are licensed by their manufacturers</p>
                </div>
            </div>
             <div className='aboutCardItem'>
                <div className='aboutCardItemIcon'>
                    <PiMedalFill style={{width:'40px',height:'40px'}} />
                </div>
                <div className='aboutCardItemText'>
                    <h3 style={{margin:'0'}}>Best Price</h3>
                    <p style={{fontSize:'15px', maxWidth:'370px'}}>the best prices on the market</p>
                </div>
            </div>
             <div className='aboutCardItem'>
                <div className='aboutCardItemIcon'>
                    <ImCross style={{width:'40px',height:'40px'}} />
                </div>
                <div className='aboutCardItemText'>
                    <h3 style={{margin:'0'}}>Free Cancelation</h3>
                    <p style={{fontSize:'15px', maxWidth:'370px'}}>You can easily cancel the lease at any time if you are not satisfied with it</p>
                </div>
            </div>
        </div>
    </div>
  )
}
