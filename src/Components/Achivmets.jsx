import React from 'react'

export default function Achivmets() {
  return (
    <div className='achivmets'>
        <h1 style={{fontWeight:'700'}}>Our <span  style={{color:'#3FB6F0'}}>Achievement</span></h1>
        <p className='subTitleAbout'>Our Journey Of Success Is A Testament To The Collective Efforts And Determination Of Our Team</p>
        <div className='achivmetsBlock'>
            <div className='achivmetsBlockItem'>
                <span style={{color:'#3FB6F0', fontSize:'30px', fontWeight:'700'}}>100+</span>
                <span>Active Member</span>
            </div>
            <div className='achivmetsBlockItem'>
                <span style={{color:'#3FB6F0', fontSize:'30px', fontWeight:'700'}}>50+</span>
                <span>Car Model</span>
            </div>
            <div className='achivmetsBlockItem'>
                <span style={{color:'#3FB6F0', fontSize:'30px', fontWeight:'700'}}>300+</span>
                <span>Positive Rating</span>
            </div>
        </div>
    </div>
  )
}
