// import React from 'react';

// const Facilities = () => {
//   return (
//     <div className="mx-8 my-8">
//       <h2 className="text-4xl font-bold mb-4 text-center">Facilities</h2>
//       <div className="flex flex-wrap justify-center">
//         {/* Upper Row */}
//         <div className="w-1/3 p-4 m-4 bg-blue-300 text-center">
//           <div className="mx-auto">Box 1 Content</div>
//         </div>
//         <div className="w-1/3 p-4 m-4 bg-green-300 text-center">
//           <div className="mx-auto">Box 2 Content</div>
//         </div>
//         <div className="w-1/3 p-4 m-4 bg-yellow-300 text-center">
//           <div className="mx-auto">Box 3 Content</div>
//         </div>

//         {/* Lower Row */}
//         <div className="w-1/3 p-4 m-4 bg-red-300 text-center">
//           <div className="mx-auto">Box 4 Content</div>
//         </div>
//         <div className="w-1/3 p-4 m-4 bg-purple-300 text-center">
//           <div className="mx-auto">Box 5 Content</div>
//         </div>
//         <div className="w-1/3 p-4 m-4 bg-pink-300 text-center">
//           <div className="mx-auto">Box 6 Content</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Facilities;



// Facilities.js


// Facilities.js


// Facilities.js

// Facilities.js

import React from 'react';

const Facilities = () => {
  return (
    <div className=" p-6 mt-24 bg-gray-200">
      <h2 className="text-4xl font-bold  mb-12 text-center  uppercase">facility</h2>
      <div className="flex flex-wrap justify-center">
        {/* Upper Row */}
        <div className="w-full sm:w-1/2 md:w-1/3 p-4 m-2 sm:m-4 hover:bg-sky-700 bg-white text-center sm:text-left flex flex-col items-center rounded-lg shadow-lg">
          <img
            src="https://aviationsierra.com/wp-content/uploads/2023/04/Pilot-2-150x150.png"
            alt="Logo"
            className="w-10 h-10 mr-2 object-contain"
          />
          <div className="text-xl font-bold my-2">From Fresher to Pilot</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-4 m-2 sm:m-4 hover:bg-sky-700 bg-white text-center sm:text-left flex flex-col items-center rounded-lg shadow-lg">
          <img
            src="https://aviationsierra.com/wp-content/uploads/2023/04/get-money-150x150.png"
            alt="Logo"
            className="w-10 h-10 mr-2 object-contain"
          />
          <div className="text-xl font-bold my-2">Most Affordable Course Fees</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-4 m-2 sm:m-4 hover:bg-sky-700 bg-white text-center sm:text-left flex flex-col items-center rounded-lg shadow-lg">
          <img
            src="https://aviationsierra.com/wp-content/uploads/2023/04/education-150x150.png"
            alt="Logo"
            className="w-10 h-10 mr-2 object-contain"
          />
          <div className="text-xl font-bold my-2">Easy Education Loan</div>
        </div>

        {/* Lower Row */}
        <div className="w-full sm:w-1/2 md:w-1/3 p-4 m-2 sm:m-4 hover:bg-sky-700 bg-white text-center sm:text-left flex flex-col items-center rounded-lg shadow-2xl">
          <img
            src="https://aviationsierra.com/wp-content/uploads/2023/04/pilot-150x150.png"
            alt="Logo"
            className="w-10 h-10 mr-2 object-contain"
          />
          <div className="text-xl font-bold my-2">Experienced Trainers</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-4 m-2 sm:m-4 hover:bg-sky-700 bg-white text-center sm:text-left flex flex-col items-center rounded-lg shadow-lg">
          <img
            src="https://aviationsierra.com/wp-content/uploads/2023/04/businessman-150x150.png"
            alt="Logo"
            className="w-10 h-10 mr-2 object-contain"
          />
          <div className="text-xl font-bold my-2">Job Assistance</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-4 m-2 sm:m-4 hover:bg-sky-700 bg-white text-center sm:text-left flex flex-col items-center rounded-lg shadow-lg">
          <img
            src="https://aviationsierra.com/wp-content/uploads/2023/04/businessman-150x150.png"
            alt="Logo"
            className="w-10 h-10 mr-2 object-contain"
          />
          <div className="text-xl font-bold my-2">International Exposure</div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
