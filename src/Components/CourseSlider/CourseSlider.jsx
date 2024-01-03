// src/components/Slider.js

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  '../../assets/image1.png',
  '../../assets/image2.png',
  '../../assets/image3.png',
  // Add more image paths as needed
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ImageSlider = () => {
  return (
    <Slider {...settings}>
      {images.map((images, index) => (
        <div key={index}>
          <img src={images} alt={`Slide ${index + 1}`} className="w-full h-auto" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
