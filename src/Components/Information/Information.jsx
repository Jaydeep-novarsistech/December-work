// // // EnquiryForm.js

// // import React, { useState } from 'react';

// // const Information = () => {
// //   return (
// //     <div className="bg-gray-100 py-10 px-8"> {/* Added px-8 for horizontal padding */}
// //       <div className="container mx-auto flex justify-between space-x-8">
// //         {/* Column 1 */}
// //         <div className="w-1/3 bg-blue-500 p-6 text-white flex flex-col items-center rounded">
// //           <h2 className="text-3xl font-extrabold mb-4">Column 1</h2>
// //           <p className="text-center">Content for column 1</p>
// //         </div>

// //         {/* Column 2 */}
// //         <div className="w-1/3 bg-blue-500 p-6 text-white flex flex-col items-center rounded">
// //           <h2 className="text-3xl font-extrabold mb-4">Column 2</h2>
// //           <p className="text-center">Content for column 2</p>
// //         </div>

// //         {/* Column 3 */}
// //         <div className="w-1/3 bg-blue-500 p-6 text-white flex flex-col items-center rounded">
// //           <h2 className="text-3xl font-extrabold mb-4">Column 3</h2>
// //           <p className="text-center">Content for column 3</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Information;



// // EnquiryForm.js

// // EnquiryForm.js
import React from 'react';
import call_icon from '../../assets/call icon.png';
import clock_icon from '../../assets/clock icon.png';
import mail_icon from '../../assets/text icon.png';

const Information = () => {
  const phoneNumber = '0123456789';
  const emailAddress = 'info@abcd.com';

  const makeCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const sendEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="bg-gray-200 py-10 px-4 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Box 1 */}
        <div
          className="p-6 bg-white hover:bg-sky-700 text-black flex items-center rounded w-full cursor-pointer"
          onClick={makeCall}
        >
          <img
            src={call_icon}
            alt="Column 1 Image"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div className="flex-1 text-center">
            <h2 className="text-3xl font-extrabold mb-2">Give us Call</h2>
            <p className="mb-4">{phoneNumber}</p>
          </div>
        </div>

        {/* Box 2 */}
        <div
          className="bg-white hover:bg-sky-700 p-6 text-black flex items-center rounded w-full cursor-pointer"
          onClick={sendEmail}
        >
          <img
            src={mail_icon}
            alt="Column 2 Image"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div className="flex-1 text-center">
            <h2 className="text-3xl font-extrabold mb-2">Send Us A Message</h2>
            <p className="mb-4">{emailAddress}</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="bg-white hover:bg-sky-700 p-6 text-black flex items-center rounded w-full">
          <img
            src={clock_icon}
            alt=""
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div className="flex-1 text-center">
            <h2 className="text-3xl font-extrabold mb-2">Opening Hours</h2>
            <p className="mb-1">9:30 am to 6:00 pm</p>
            <p className="mb-4">Mon to Fri</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
