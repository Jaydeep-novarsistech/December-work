// // src/components/HomePage.js

// import React from 'react';
// import image3 from '../../assets/image3.png';

// const HomePage = () => {
//   return (
//     <div className="flex justify-between p-8 mt-8 space-x-8 md:mx-8">
//       {/* Left side (Content) */}
//       <div className="flex flex-col max-w-[600px] space-y-4"> {/* Increased max-width to 600px */}
//         <h1 className="text-4xl font-bold">
//           Welcome to Our Website <br /> Lorem ipsum dolor <br /> sit amet.
//         </h1>
//         <p className="text-gray-700 max-h-[150px] overflow-hidden"> {/* Increased max-height to 150px */}
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, repellendus!.
//         </p>
//         <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 w-24 h-8 text-xs hover:bg-sky-700">Button</button>
//       </div>

//       {/* Right side (Image) */}
//       <div className="ml-8">
//         <img src={image3} alt="Illustration" className="w-120 hover:bg-sky-700 h-120 object-cover rounded-lg" /> {/* Increased width and height values */}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
    




import React from "react";
import back2 from '../../assets/back  (2).jpg';
import part1 from '../../assets/part 1 .jpg';
import part2 from '../../assets/part 2 .jpg';

const HomePage = () => {
  return (
    <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8 mb-12 bg-gray-200">
      <div className="lg:flex items-center justify-between">
        <div className="lg:w-1/3">
          <h1 className="text-4xl font-semibold leading-9 text-gray-800 mb-5 animate__animated animate__fadeIn">
            Indoor Academy
          </h1>
          <h2 className="text-3xl font-semibold leading-9 text-gray-800 mt-12 animate__animated animate__fadeIn">
            Pilot Training Institute In Delhi, India
          </h2>
          <p className="text-3xl leading-9 mt-4 text-gray-600 animate__animated animate__fadeIn">
            Start Your Pilot Journey With Aviation Academy
          </p>
          <button
            aria-label="view catalogue"
            className="drop-shadow-2xl  focus:ring-2 focus:ring-offset-2 hover:bg-sky-700 border bg-white border-black p-5 rounded-full focus: mt-6 md:mt-8 text-base font-bold leading-none text-gray-800 flex items-center hover:underline animate__animated animate__fadeIn"
          >
            View Catalogue
            <svg className="ml-2 mt-1" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.33325 4H10.6666" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 6.66667L10.6667 4" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 1.33398L10.6667 4.00065" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="lg:w-7/12 lg:mt-0 mt-8">
          <div className="w-full h-full bg-red-200 overflow-hidden">
            <img src={back2} alt="apartment design" className="w-full sm:block hidden drop-shadow-2xl animate__animated animate__fadeIn" />
            <img
              src="https://i.ibb.co/ZVPGjGJ/pexels-max-vakhtbovych-6782351-1.png"
              alt="apartment design"
              className="sm:hidden block w-full animate__animated animate__fadeIn"
            />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4 animate__animated animate__fadeIn">
            <img src={part1} className="w-full drop-shadow-2xl " alt="kitchen" />
            <img src={part2} className="w-full drop-shadow-2xl " alt="sitting room" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
