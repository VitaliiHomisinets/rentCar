import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div style={{ width: '560px', margin: '0 auto' }}>

      <Slider {...settings}>
        <div>
          <img src="./car/AudiQ5.png" alt="Image 1" />
        </div>
        <div>
          <img src="./car/MercedesBenzEClassW213.png" alt="Image 2" />
        </div>
        <div>
          <img src="./car/LexusES.png" alt="Image 3" />
        </div>
        <div>
          <img src="./car/HondaAccord.png"alt="Image 4" />
        </div>
        <div>
          <img src="./car/FordFusion.png" alt="Image 5" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;