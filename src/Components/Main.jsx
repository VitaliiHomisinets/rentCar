import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoSpeedometer } from "react-icons/io5";
import { GiWeight } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { IoCalendarNumber } from "react-icons/io5";
import { FaRoad } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { carData } from './CarData';

import Header from './Header';
import About from './About';
import Achivmets from './Achivmets';
import Customers from './Customers';
import Footer from './Footer';

export default function Main() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const initialCar = carData[0];
    setInfo(initialCar);
    setSelectedButton(initialCar.type);
  }, []);
  const infoClick = (itemName) => {
    const selectedCar = carData.find((car) => car.type === itemName);
    setInfo(selectedCar);
    setSelectedButton(itemName);
  };

  const buttonNames = carData.map((car) => car.type);
  
  return (
    <>
    <Header />
 
 
      <div className='main'>
        <div className='mainBg'>
          <div className='menu'>
          <h1 style={{color:'#000', paddingBottom:'10px'}}>Select the type of car</h1>

          <div className='menuBtn'>
            {buttonNames.map((itemName, index) => (
              <button
                key={index}
                onClick={() => infoClick(itemName)}
                className={selectedButton === itemName ? 'active' : ''}
              >
                {itemName}
              </button>
            ))}
          </div>
  
      
   {info && (   

        <div className='menuBlockInfo'>

            <div className='menuTitle'>
               <span>{info.description.eco}</span>
            </div>
          <div className='menuInfo'>
           

              <div className='firstInfo'>
                <div className='imgCar'>
                  <img src={info.name.Econom.one.image} alt="Img" />
                </div>
                <div className='carModule'>
                <span>{info.name.Econom.one.marka} <span style={{fontSize:'15px', fontWeight:'400'}}>{info.name.Econom.one.module}</span></span>
                </div>
                <div className='star'>
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <span>(2k rewies)</span>
                </div>
                <div className='characteristicsCar'>
                  <div className='characteristicsCarItem'>
                    <PiEngineFill fill="#3FB6F0"/>
                    <span>{info.name.Econom.one.Engine}<span style={{fontSize:'10px'}}>L</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoSpeedometer fill="#3FB6F0" />
                    <span>{info.name.Econom.one.MaximumSpeed} <span style={{fontSize:'10px'}}>km/h</span> </span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <GiWeight fill="#3FB6F0" />
                    <span>{info.name.Econom.one.Weight}<span style={{fontSize:'10px'}}>kg</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <BsFillFuelPumpFill fill="#3FB6F0" />
                    <span>{info.name.Econom.one.Fuel}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoCalendarNumber fill="#3FB6F0" />
                    <span>{info.name.Econom.one.Year}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <FaRoad fill="#3FB6F0" />
                    <span>{info.name.Econom.one.FuelConsumption}<span style={{fontSize:'10px'}}>L/100Km</span></span>
                  </div>
                </div>
                <div style={{borderBottom:'2px dashed #000'}}></div>
                <div className='priceCar'>
                    <span style={{fontSize:'20px'}}>{info.name.Econom.one.price} <span style={{fontSize:'10px'}}>/Day</span></span>
                    <Link to="/pay"><button>Rent Car</button></Link>
                </div>  
              </div>
              <div className='firstInfo'>
                <div className='imgCar'>
                  <img src={info.name.Econom.two.image} alt="Img" />
                </div>
                <div className='carModule'>
                <span>{info.name.Econom.two.marka} <span style={{fontSize:'15px', fontWeight:'400'}}>{info.name.Econom.two.module} </span></span>
                </div>
                <div className='star'>
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <span>(2k rewies)</span>
                </div>
                <div className='characteristicsCar'>
                  <div className='characteristicsCarItem'>
                    <PiEngineFill fill="#3FB6F0"/>
                    <span>{info.name.Econom.two.Engine}<span style={{fontSize:'10px'}}>L</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoSpeedometer fill="#3FB6F0" />
                    <span>{info.name.Econom.two.MaximumSpeed} <span style={{fontSize:'10px'}}>km/h</span> </span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <GiWeight fill="#3FB6F0" />
                    <span>{info.name.Econom.two.Weight}<span style={{fontSize:'10px'}}>kg</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <BsFillFuelPumpFill fill="#3FB6F0" />
                    <span>{info.name.Econom.two.Fuel}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoCalendarNumber fill="#3FB6F0" />
                    <span>{info.name.Econom.two.Year}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <FaRoad fill="#3FB6F0" />
                    <span>{info.name.Econom.two.FuelConsumption}<span style={{fontSize:'10px'}}>L/100Km</span></span>
                  </div>
                </div>
                <div style={{borderBottom:'2px dashed #000'}}></div>
                <div className='priceCar'>
                    <span style={{fontSize:'20px'}}>{info.name.Econom.two.price} <span style={{fontSize:'10px'}}>/Day</span></span>
                    <Link to="/pay"><button>Rent Car</button></Link>
                </div>  
              </div>
              <div className='firstInfo'>
                <div className='imgCar'>
                  <img src={info.name.Econom.three.image} alt="Img" />
                </div>
                <div className='carModule'>
                <span>{info.name.Econom.three.marka} <span style={{fontSize:'15px', fontWeight:'400'}}>{info.name.Econom.three.module} </span></span>
                </div>
                <div className='star'>
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <span>(2k rewies)</span>
                </div>
                <div className='characteristicsCar'>
                  <div className='characteristicsCarItem'>
                    <PiEngineFill fill="#3FB6F0"/>
                    <span>{info.name.Econom.three.Engine}<span style={{fontSize:'10px'}}>L</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoSpeedometer fill="#3FB6F0" />
                    <span>{info.name.Econom.three.MaximumSpeed} <span style={{fontSize:'10px'}}>km/h</span> </span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <GiWeight fill="#3FB6F0" />
                    <span>{info.name.Econom.three.Weight}<span style={{fontSize:'10px'}}>kg</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <BsFillFuelPumpFill fill="#3FB6F0" />
                    <span>{info.name.Econom.three.Fuel}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoCalendarNumber fill="#3FB6F0" />
                    <span>{info.name.Econom.three.Year}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <FaRoad fill="#3FB6F0" />
                    <span>{info.name.Econom.three.FuelConsumption}<span style={{fontSize:'10px'}}>L/100Km</span></span>
                  </div>
                </div>
                <div style={{borderBottom:'2px dashed #000'}}></div>
                <div className='priceCar'>
                    <span style={{fontSize:'20px'}}>{info.name.Econom.three.price} <span style={{fontSize:'10px'}}>/Day</span></span>
                    <Link to="/pay"><button>Rent Car</button></Link>
                </div>  
              </div>
          </div>


            <div className='menuTitle'>
               <span>{info.description.mid}</span>
            </div>
          <div className='menuInfo'>

              <div className='firstInfo'>
                <div className='imgCar'>
                  <img src={info.name.Midle.one.image} alt="Img" />
                </div>
                <div className='carModule'>
                <span>{info.name.Midle.one.marka} <span style={{fontSize:'15px', fontWeight:'400'}}>{info.name.Midle.one.module}</span></span>
                </div>
                <div className='star'>
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <span>(2k rewies)</span>
                </div>
                <div className='characteristicsCar'>
                  <div className='characteristicsCarItem'>
                    <PiEngineFill fill="#3FB6F0"/>
                    <span>{info.name.Midle.one.Engine}<span style={{fontSize:'10px'}}>L</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoSpeedometer fill="#3FB6F0" />
                    <span>{info.name.Midle.one.MaximumSpeed} <span style={{fontSize:'10px'}}>km/h</span> </span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <GiWeight fill="#3FB6F0" />
                    <span>{info.name.Midle.one.Weight}<span style={{fontSize:'10px'}}>kg</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <BsFillFuelPumpFill fill="#3FB6F0" />
                    <span>{info.name.Midle.one.Fuel}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoCalendarNumber fill="#3FB6F0" />
                    <span>{info.name.Midle.one.Year}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <FaRoad fill="#3FB6F0" />
                    <span>{info.name.Midle.one.FuelConsumption}<span style={{fontSize:'10px'}}>L/100Km</span></span>
                  </div>
                </div>
                <div style={{borderBottom:'2px dashed #000'}}></div>
                <div className='priceCar'>
                    <span style={{fontSize:'20px'}}>{info.name.Midle.one.price} <span style={{fontSize:'10px'}}>/Day</span></span>
                    <Link to="/pay"><button>Rent Car</button></Link>
                </div>  
              </div>
              <div className='firstInfo'>
                <div className='imgCar'>
                  <img src={info.name.Midle.two.image} alt="Img" />
                </div>
                <div className='carModule'>
                <span>{info.name.Midle.two.marka} <span style={{fontSize:'15px', fontWeight:'400'}}>{info.name.Midle.two.module}</span></span>
                </div>
                <div className='star'>
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <span>(2k rewies)</span>
                </div>
                <div className='characteristicsCar'>
                  <div className='characteristicsCarItem'>
                    <PiEngineFill fill="#3FB6F0"/>
                    <span>{info.name.Midle.two.Engine}<span style={{fontSize:'10px'}}>L</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoSpeedometer fill="#3FB6F0" />
                    <span>{info.name.Midle.two.MaximumSpeed} <span style={{fontSize:'10px'}}>km/h</span> </span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <GiWeight fill="#3FB6F0" />
                    <span>{info.name.Midle.two.Weight}<span style={{fontSize:'10px'}}>kg</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <BsFillFuelPumpFill fill="#3FB6F0" />
                    <span>{info.name.Midle.two.Fuel}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoCalendarNumber fill="#3FB6F0" />
                    <span>{info.name.Midle.two.Year}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <FaRoad fill="#3FB6F0" />
                    <span>{info.name.Midle.two.FuelConsumption}<span style={{fontSize:'10px'}}>L/100Km</span></span>
                  </div>
                </div>
                <div style={{borderBottom:'2px dashed #000'}}></div>
                <div className='priceCar'>
                    <span style={{fontSize:'20px'}}>{info.name.Midle.two.price} <span style={{fontSize:'10px'}}>/Day</span></span>
                    <Link to="/pay"><button>Rent Car</button></Link>
                </div>  
              </div>
              <div className='firstInfo'>
                <div className='imgCar'>
                  <img src={info.name.Midle.three.image} alt="Img" />
                </div>
                <div className='carModule'>
                <span>{info.name.Midle.three.marka} <span style={{fontSize:'15px', fontWeight:'400'}}>{info.name.Midle.three.module}</span></span>
                </div>
                <div className='star'>
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <span>(2k rewies)</span>
                </div>
                <div className='characteristicsCar'>
                  <div className='characteristicsCarItem'>
                    <PiEngineFill fill="#3FB6F0"/>
                    <span>{info.name.Midle.three.Engine}<span style={{fontSize:'10px'}}>L</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoSpeedometer fill="#3FB6F0" />
                    <span>{info.name.Midle.three.MaximumSpeed} <span style={{fontSize:'10px'}}>km/h</span> </span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <GiWeight fill="#3FB6F0" />
                    <span>{info.name.Midle.three.Weight}<span style={{fontSize:'10px'}}>kg</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <BsFillFuelPumpFill fill="#3FB6F0" />
                    <span>{info.name.Midle.three.Fuel}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoCalendarNumber fill="#3FB6F0" />
                    <span>{info.name.Midle.three.Year}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <FaRoad fill="#3FB6F0" />
                    <span>{info.name.Midle.three.FuelConsumption}<span style={{fontSize:'10px'}}>L/100Km</span></span>
                  </div>
                </div>
                <div style={{borderBottom:'2px dashed #000'}}></div>
                <div className='priceCar'>
                    <span style={{fontSize:'20px'}}>{info.name.Midle.three.price} <span style={{fontSize:'10px'}}>/Day</span></span>
                    <Link to="/pay"><button>Rent Car</button></Link>
                </div>  
              </div>
          </div>
        
        
            <div className='menuTitle'>
               <span>{info.description.prem}</span>
            </div>
          <div className='menuInfo'>
          
              <div className='firstInfo'>
                <div className='imgCar'>
                  <img src={info.name.Premium.one.image} alt="Img" />
                </div>
                <div className='carModule'>
                <span>{info.name.Premium.one.marka} <span style={{fontSize:'15px', fontWeight:'400'}}>{info.name.Premium.one.module}</span></span>
                </div>
                <div className='star'>
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <span>(2k rewies)</span>
                </div>
                <div className='characteristicsCar'>
                  <div className='characteristicsCarItem'>
                    <PiEngineFill fill="#3FB6F0"/>
                    <span>{info.name.Premium.one.Engine}<span style={{fontSize:'10px'}}>L</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoSpeedometer fill="#3FB6F0" />
                    <span>{info.name.Premium.one.MaximumSpeed} <span style={{fontSize:'10px'}}>km/h</span> </span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <GiWeight fill="#3FB6F0" />
                    <span>{info.name.Premium.one.Weight}<span style={{fontSize:'10px'}}>kg</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <BsFillFuelPumpFill fill="#3FB6F0" />
                    <span>{info.name.Premium.one.Fuel}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoCalendarNumber fill="#3FB6F0" />
                    <span>{info.name.Premium.one.Year}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <FaRoad fill="#3FB6F0" />
                    <span>{info.name.Premium.one.FuelConsumption}<span style={{fontSize:'10px'}}>L/100Km</span></span>
                  </div>
                </div>
                <div style={{borderBottom:'2px dashed #000'}}></div>
                <div className='priceCar'>
                    <span style={{fontSize:'20px'}}>{info.name.Premium.one.price} <span style={{fontSize:'10px'}}>/Day</span></span>
                    <Link to="/pay"><button>Rent Car</button></Link>
                </div>  
              </div>
              <div className='firstInfo'>
                <div className='imgCar'>
                  <img src={info.name.Premium.two.image} alt="Img" />
                </div>
                <div className='carModule'>
                <span>{info.name.Premium.two.marka} <span style={{fontSize:'15px', fontWeight:'400'}}>{info.name.Premium.two.module}</span></span>
                </div>
                <div className='star'>
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <span>(2k rewies)</span>
                </div>
                <div className='characteristicsCar'>
                  <div className='characteristicsCarItem'>
                    <PiEngineFill fill="#3FB6F0"/>
                    <span>{info.name.Premium.two.Engine}<span style={{fontSize:'10px'}}>L</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoSpeedometer fill="#3FB6F0" />
                    <span>{info.name.Premium.two.MaximumSpeed} <span style={{fontSize:'10px'}}>km/h</span> </span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <GiWeight fill="#3FB6F0" />
                    <span>{info.name.Premium.two.Weight}<span style={{fontSize:'10px'}}>kg</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <BsFillFuelPumpFill fill="#3FB6F0" />
                    <span>{info.name.Premium.two.Fuel}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoCalendarNumber fill="#3FB6F0" />
                    <span>{info.name.Premium.two.Year}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <FaRoad fill="#3FB6F0" />
                    <span>{info.name.Premium.two.FuelConsumption}<span style={{fontSize:'10px'}}>L/100Km</span></span>
                  </div>
                </div>
                <div style={{borderBottom:'2px dashed #000'}}></div>
                <div className='priceCar'>
                    <span style={{fontSize:'20px'}}>{info.name.Premium.two.price} <span style={{fontSize:'10px'}}>/Day</span></span>
                    <Link to="/pay"><button>Rent Car</button></Link>
                </div>  
              </div>
              <div className='firstInfo'>
                <div className='imgCar'>
                  <img src={info.name.Premium.three.image} alt="Img" />
                </div>
                <div className='carModule'>
                <span>{info.name.Premium.three.marka} <span style={{fontSize:'15px', fontWeight:'400'}}>{info.name.Premium.three.module}</span></span>
                </div>
                <div className='star'>
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <IoStar fill="yellow" stroke-width="10" />
                  <span>(2k rewies)</span>
                </div>
                <div className='characteristicsCar'>
                  <div className='characteristicsCarItem'>
                    <PiEngineFill fill="#3FB6F0"/>
                    <span>{info.name.Premium.three.Engine}<span style={{fontSize:'10px'}}>L</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoSpeedometer fill="#3FB6F0" />
                    <span>{info.name.Premium.three.MaximumSpeed} <span style={{fontSize:'10px'}}>km/h</span> </span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <GiWeight fill="#3FB6F0" />
                    <span>{info.name.Premium.three.Weight}<span style={{fontSize:'10px'}}>kg</span></span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <BsFillFuelPumpFill fill="#3FB6F0" />
                    <span>{info.name.Premium.three.Fuel}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <IoCalendarNumber fill="#3FB6F0" />
                    <span>{info.name.Premium.three.Year}</span>
                  </div>
                  <div className='characteristicsCarItem'>
                    <FaRoad fill="#3FB6F0" />
                    <span>{info.name.Premium.three.FuelConsumption}<span style={{fontSize:'10px'}}>L/100Km</span></span>
                  </div>
                </div>
                <div style={{borderBottom:'2px dashed #000'}}></div>
                <div className='priceCar'>
                    <span style={{fontSize:'20px'}}>{info.name.Premium.three.price} <span style={{fontSize:'10px'}}>/Day</span></span>
                    <Link to="/pay"><button>Rent Car</button></Link>
                </div>  
              </div>
          </div>
  
            
          
        </div>
        )} 
      
       
      </div>
        </div>

        

    </div>


    <About />
    <Achivmets />
    <Customers />
    <Footer />

    </>
  )
}
