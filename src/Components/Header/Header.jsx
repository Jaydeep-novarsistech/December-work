// // src/components/Navbar.js

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-white p-4 flex items-center justify-between">
//       {/* Left side (Logo) */}
//       <div className="flex items-center">
        
//         <span className="text-xl font-bold">Your Logo</span>
//       </div>

//       {/* Right side (Buttons) */}
//       <div className="flex items-center space-x-4">
//         <button className=" hover:bg-sky-700 font-bold text-black px-4 py-2 rounded">Home</button>
//         <button className=" hover:bg-sky-700 font-bold text-black px-4 py-2 rounded">About</button>
//         <button className=" hover:bg-sky-700 font-bold text-black px-4 py-2 rounded">Placement</button>
//         <button className=" hover:bg-sky-700 font-bold text-black px-4 py-2 rounded">Courses</button>
//         <button className=" hover:bg-sky-700 font-bold text-black px-4 py-2 rounded">Contact Us</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import About from '../AboutPages/About';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [showButtons, setShowButtons] = useState(false);

//   const toggleButtons = () => {
//     setShowButtons(!showButtons);
//   };

//   return (
//     <nav className="bg-gray-200 p-4 flex flex-col lg:flex-row items-center justify-between">
//       {/* Left side (Logo) */}
//       <div className="flex items-center mb-4 lg:mb-0">
//         <span className="text-xl font-bold">Your Logo</span>
//       </div>

//       {/* Right side (Buttons) */}
      
//       <div className="flex items-center space-x-4 lg:ml-auto">
//         {/* Individual buttons for larger screens */}
//         <Link to="/">
//         <button className="hidden lg:inline-block hover:bg-sky-700 font-bold text-black px-4 py-2 rounded">
//           Home
//         </button>
//         </Link>
//         <Link to="/About">
//         <button  className="hidden lg:inline-block hover:bg-sky-700 font-bold text-black px-4 py-2 rounded">
//           About
//         </button>
//         </Link>
//         <Link to="/placement">
//         <button className="hidden lg:inline-block hover:bg-sky-700 font-bold text-black px-4 py-2 rounded">
//           Placement
//         </button>
//         </Link>

//         <button className="hidden lg:inline-block hover:bg-sky-700 font-bold text-black px-4 py-2 rounded">
//           Courses
//         </button>

//         <Link to="/contact">
//         <button className="hidden lg:inline-block hover:bg-sky-700 font-bold text-black px-4 py-2 rounded">
//           Contact Us
//         </button>
//         </Link>
//         {/* Single button for small screens */}
//         <button
//           className="lg:hidden hover:bg-sky-700 font-bold text-black px-4 py-2 rounded flex-grow"
//           onClick={toggleButtons}
//         >
//           Menu
//         </button>

//         {/* Conditional rendering for individual buttons on mobile screens */}
//         {showButtons && (
//           <div className="lg:hidden flex flex-col items-center mt-4">
//             <button className="hover:bg-sky-700 font-bold text-black px-4 py-2 rounded">
//               Home
//             </button>
//             <Link to="/about">
//             <button className="hover:bg-sky-700 font-bold text-black px-4 py-2 rounded">
//               About
//             </button>
//             </Link>

//             <Link to="/placement">
//             <button className="hover:bg-sky-700 font-bold text-black px-4 py-2 rounded">
//               Placement
//             </button>
//             </Link>
//             <button className="hover-bg-sky-700 font-bold text-black px-4 py-2 rounded">
//               Courses
//             </button>
//             <Link to="/contact">
//             <button className="hover-bg-sky-700 font-bold text-black px-4 py-2 rounded">
//               Contact Us
//             </button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import About from '../AboutPages/About';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <nav className="bg-gradient-to-r from-sky-700 to-gray-200 p-4 flex flex-col lg:flex-row items-center justify-between shadow-lg">
      {/* Left side (Logo) */}
      <div className="flex items-center mb-4 lg:mb-0">
        <span className="text-2xl font-bold text-white">Your Logo</span>
      </div>

      {/* Right side (Buttons) */}
      <div className="flex items-center space-x-4 lg:ml-auto">
        {/* Individual buttons for larger screens */}
        <Link to="/">
          <button className="hidden lg:inline-block hover:bg-sky-800 hover:text-white text-sky-700 font-bold px-4 py-2 rounded-full">
            Home
          </button>
        </Link>
        <Link to="/About">
          <button className="hidden lg:inline-block hover:bg-sky-800 hover:text-white text-sky-700 font-bold px-4 py-2 rounded-full">
            About
          </button>
        </Link>
        <Link to="/placement">
          <button className="hidden lg:inline-block hover:bg-sky-800 hover:text-white text-sky-700 font-bold px-4 py-2 rounded-full">
            Placement
          </button>
        </Link>

        <button className="hidden lg:inline-block hover:bg-sky-800 hover:text-white text-sky-700 font-bold px-4 py-2 rounded-full">
          Courses
        </button>

        <Link to="/contact">
          <button className="hidden lg:inline-block hover:bg-sky-800 hover:text-white text-sky-700 font-bold px-4 py-2 rounded-full">
            Contact Us
          </button>
        </Link>
        {/* Single button for small screens */}
        <button
          className="lg:hidden hover:bg-sky-800 text-sky-700 font-bold px-4 py-2 rounded-full flex-grow"
          onClick={toggleButtons}
        >
          Menu
        </button>

        {/* Conditional rendering for individual buttons on mobile screens */}
        {showButtons && (
          <div className="lg:hidden flex flex-col items-center mt-4">
            <button className="hover:bg-sky-800 text-sky-700 font-bold px-4 py-2 rounded-full">
              Home
            </button>
            <Link to="/about">
              <button className="hover:bg-sky-800 text-sky-700 font-bold px-4 py-2 rounded-full">
                About
              </button>
            </Link>

            <Link to="/placement">
              <button className="hover:bg-sky-800 text-sky-700 font-bold px-4 py-2 rounded-full">
                Placement
              </button>
            </Link>
            <button className="hover:bg-sky-800 text-sky-700 font-bold px-4 py-2 rounded-full">
              Courses
            </button>
            <Link to="/contact">
              <button className="hover:bg-sky-800 hover:text-white  font font-bold px-4 py-2 rounded-full">
                Contact Us
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
