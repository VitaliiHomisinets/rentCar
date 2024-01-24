import React from 'react'
import { Link } from 'react-router-dom'
import {GrClose} from 'react-icons/gr'
import { useState } from 'react'
import { FaCar } from 'react-icons/fa';
export default function PayWindow() {

  const [dropdown, setDropdown] = useState(false)

const dropdownClick = () => {
  setDropdown(!dropdown)
}

  return (
    <>
    <div className='payWindow'>
        <div className='payTitle'>
          <span className='title' style={{ maxWidth:' 750px', paddingTop:'80px'}}>
          ORDER CAR</span>  
        </div>
         <div className='payDropdown'>
          <div className='dropdownMenuMeal'>
             <button onClick={dropdownClick} className='payNavigation'>
                <div>
                    <img style={{paddingRight:'10px'}} src="./img/present.png" alt="" /> 
                    TYPE CAR
                </div>
                <img src="./img/dropdown.png" alt="" />
            </button>
            {dropdown && (
             <div className='dropdownMeal'>
                <ul>
                  <li>SEDAN</li>
                  <li>UNIVERSAL</li>
                  <li>CROSSOVER</li>
                  <li>HATCHBACK</li>
                </ul>
             </div>
            )}
          </div>

           <div>
            <button className='payPlace'>
                <div>
                    <img style={{paddingRight:'10px'}} src="./img/place.png" alt="" />
                    MODEL CAR
                </div>   
                <img src="./img/dropdown.png" alt="" />
            </button>
           </div>
            
         </div>
         <div className='inputs'>
          <div>
            <input className='inputPrice' type="text" />
            <span style={{fontSize:'20px'}}>or</span>
            <input className='inputPrice' style={{fontSize:'20px', width:'150px'}} type="text" placeholder='XX POINTS' />
          </div>
         </div>
         <div className='priceBtn'>
            <button>30</button>
            <button>70</button>
            <button>180</button>
            <button>540</button>
            <button>1500</button>
         </div>
         <div className='windowNextBtn'>
          <Link to="/"> 
            <button style={{width:'115px'}} className='closeBtn'>
              <GrClose className='svg' />
            </button>
          </Link>
            <button style={{width:'840px'}}>CONTINUE</button>
         </div>
    </div>
    </>
  )
}
