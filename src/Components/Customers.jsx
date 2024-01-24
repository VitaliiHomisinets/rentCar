import React from 'react'
import { FaUser } from "react-icons/fa";
export default function Customers() {
  return (
    <div className='customers'>
        <h1 style={{fontWeight:'700', maxWidth:'500px', textAlign:'center'}}>What Our <span style={{color:'#3FB6F0'}}>Customers</span> Have To Say</h1>
        <p className='subTitleAbout'>We Are World Wide Corporates Brand</p>
        <div className='customersCardBlock'>
            <div className='customersCardBlockItem'>
                <div className='customersUserBlock'>
                    <FaUser className='user'/>
                    <div className='customersuserInfo'>
                        <span style={{fontWeight:'700',fontSize:'18px'}}>MeKAbir</span>
                        <span style={{fontSize:'13px'}}>Customer</span>
                    </div>
                </div>
                <p className='comentar'>On The Windows Talking Painted Pasture Yet its Express Parties Use. Sure Last Upon He Same As Knew Next.</p>
            </div>
            <div className='customersCardBlockItem'>
            <div className='customersUserBlock'>
                    <FaUser className='user'/>
                    <div className='customersuserInfo'>
                        <span style={{fontWeight:'700',fontSize:'18px'}}>Louis Arex</span>
                        <span style={{fontSize:'13px'}}>Customer</span>
                    </div>
                </div>
                <p className='comentar'>On The Windows Talking Painted Pasture Yet its Express Parties Use. Sure Last Upon He Same As Knew Next.</p>
            </div>
            <div className='customersCardBlockItem'>
            <div className='customersUserBlock'>
                    <FaUser className='user'/>
                    <div className='customersuserInfo'>
                        <span style={{fontWeight:'700',fontSize:'18px'}}>Alois Lara</span>
                        <span style={{fontSize:'13px'}}>Customer</span>
                    </div>
                </div>
                <p className='comentar'>On The Windows Talking Painted Pasture Yet its Express Parties Use. Sure Last Upon He Same As Knew Next.</p>
            </div>
        </div>
    </div>
  )
}
