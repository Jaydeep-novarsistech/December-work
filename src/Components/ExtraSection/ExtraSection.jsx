// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import { EffectCoverflow, Pagination } from 'swiper/modules';
// import travel from '../../assets/Travel & Tourism Training (1).jpg'
// import travel1 from '../../assets/Travel & Tourism Training (2).jpg'
// import travel2 from '../../assets/Travel & Tourism Training (3).jpg'
// import travel3 from '../../assets/Travel & Tourism Training (4) - Copy.jpg'
// import travel4 from '../../assets/Travel & Tourism Training.jpg'
// export default function ExtraSection() {
//   const swiperStyles = {
//     width: '80%', // Set the width of the Swiper container
//     margin: '0 auto', // Center the Swiper container
   
//   };

//   const slideStyles = {
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     width: '300px',
//     height: '300px',
    
//   };

//   const imgStyles = {
//     display: 'block',
//     width: '100%',
//     maxWidth: '100%', // Set a maximum width for the images
//     height: 'auto', // Maintain aspect ratio
//   };

//   return (
//     <>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
        
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         style={swiperStyles}
//         className="mySwiper"
//       >
//         <SwiperSlide style={slideStyles}>
//           <img
//             src={travel}
//             alt="Nature 1"
//             style={imgStyles}
//           />
//         </SwiperSlide>
//         <SwiperSlide style={slideStyles}>
//           <img
//             src={travel1}
//             alt="Nature 1"
//             style={imgStyles}
//           />
//         </SwiperSlide>
//         <SwiperSlide style={slideStyles}>
//           <img
//             src={travel2}
//             alt="Nature 1"
//             style={imgStyles}
//           />
//         </SwiperSlide>
//         <SwiperSlide style={slideStyles}>
//           <img
//             src={travel3}
//             alt="Nature 1"
//             style={imgStyles}
//           />
//         </SwiperSlide>

//         <SwiperSlide style={slideStyles}>
//           <img
//             src={travel4}
//             alt="Nature 1"
//             style={imgStyles}
//           />
//         </SwiperSlide>
       
//       </Swiper>
//     </>
//   );
// }


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import travel from '../../assets/Travel & Tourism Training (1).jpg'
import travel1 from '../../assets/Travel & Tourism Training (2).jpg'
import travel2 from '../../assets/Travel & Tourism Training (3).jpg'
import travel3 from '../../assets/Travel & Tourism Training (4) - Copy.jpg'
import travel4 from '../../assets/Travel & Tourism Training.jpg'
const ExtraSection = () => {
  const images = [travel, travel1, travel2, travel3, travel4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Transition speed
    slidesToShow: 3, // Display three images at a time
    slidesToScroll: 1,
    autoplay: true, // Auto-rotate
    autoplaySpeed: 1000, // Time between slides (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl mt-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-5">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-md shadow-md hover:scale-110 transform transition-transform duration-100"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExtraSection;
