// // EnquiryForm.js

// import React, { useState } from 'react';

// const EnquiryForm = () => {
 

//   async function Submit(e) {
//     const formEle = document.querySelector(".form");
//     e.preventDefault();
//     console.log("Submitted");

//     const formData = new FormData(formEle);

//     try {
//       const response = await fetch(
//         "https://script.google.com/macros/s/AKfycbypf3LjCR-RSB-WbLt5tXBbXwssZbDidJO-RNwfWQanTv6owGhyQglTnZiYI7y_dO_neA/exec",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       // Handle the response, e.g., check response.ok, response.status, etc.
//       console.log(response);
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//     }
//   }


 

//   return (
//     <div className="bg-gray-200 py-10">
//       <div className="container mx-auto max-w-md p-8 bg-white rounded shadow-md">
//         <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Send us an Inquiry</h2>
//         <form className="form" onSubmit={(e) => Submit(e)}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2"> Your Name</label>
//             <input
//               type="text"
//               id="Name"
//               name="Name"
             
//               className="w-full border-b-2 border-blue-500 py-2 focus:outline-none focus:border-blue-700 transition duration-300"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Age</label>
//             <input
//               type="text"
//               id="Age"
//               name="Age"
             
//               className="w-full border-b-2 border-blue-500 py-2 focus:outline-none focus:border-blue-700 transition duration-300"
//               required
//             />
//           </div>

          
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
//             <input
//               type="email"
//               id="Email"
//               name="Email"
      
//               className="w-full border-b-2 border-blue-500 py-2 focus:outline-none focus:border-blue-700 transition duration-300"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Your Mobile</label>
//             <input
//               type="number"
//               id="Mobile"
//               name="Mobile"
    
//               className="w-full border-b-2 border-blue-500 py-2 focus:outline-none focus:border-blue-700 transition duration-300"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Course</label>
//             <textarea
//               id="Course"
//               name="Course"
          
//               className="w-full border-b-2 border-blue-500 py-2 focus:outline-none focus:border-blue-700 transition duration-300"
//               required
//             ></textarea>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="quey" className="block text-gray-700 text-sm font-bold mb-2"> Your Query</label>
//             <input
//               type="text"
//               id="Query"
//               name="Query"
            
//               className="w-full border-b-2 border-blue-500 py-2 focus:outline-none focus:border-blue-700 transition duration-300"
//               required
//             />
//           </div>
          
//           <div className="text-center">
//             <button type="submit" className="bg-blue-500  text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue transition duration-300">Submit</button>
//           </div>

          
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EnquiryForm;



import React, { useState } from 'react';

const EnquiryForm = () => {
  async function Submit(e) {
    const formEle = document.querySelector(".form");
    e.preventDefault();
    console.log("Submitted");

    const formData = new FormData(formEle);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbypf3LjCR-RSB-WbLt5tXBbXwssZbDidJO-RNwfWQanTv6owGhyQglTnZiYI7y_dO_neA/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      // Handle the response, e.g., check response.ok, response.status, etc.
      console.log(response);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  }

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto max-w-md p-8 bg-white rounded-md shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Send us an Inquiry</h2>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <div className="mb-4">
            <label htmlFor="Name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
            <input
              type="text"
              id="Name"
              name="Name"
              className="w-full border-b-2 border-blue-500 py-2 px-3 focus:outline-none focus:border-blue-700 transition duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Age" className="block text-gray-700 text-sm font-bold mb-2">Your Age</label>
            <input
              type="text"
              id="Age"
              name="Age"
              className="w-full border-b-2 border-blue-500 py-2 px-3 focus:outline-none focus:border-blue-700 transition duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Email" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
            <input
              type="email"
              id="Email"
              name="Email"
              className="w-full border-b-2 border-blue-500 py-2 px-3 focus:outline-none focus:border-blue-700 transition duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Mobile" className="block text-gray-700 text-sm font-bold mb-2">Your Mobile</label>
            <input
              type="number"
              id="Mobile"
              name="Mobile"
              className="w-full border-b-2 border-blue-500 py-2 px-3 focus:outline-none focus:border-blue-700 transition duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Course" className="block text-gray-700 text-sm font-bold mb-2">Your Course</label>
            <textarea
              id="Course"
              name="Course"
              className="w-full border-b-2 border-blue-500 py-2 px-3 focus:outline-none focus:border-blue-700 transition duration-300"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="Query" className="block text-gray-700 text-sm font-bold mb-2">Your Query</label>
            <input
              type="text"
              id="Query"
              name="Query"
              className="w-full border-b-2 border-blue-500 py-2 px-3 focus:outline-none focus:border-blue-700 transition duration-300"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
