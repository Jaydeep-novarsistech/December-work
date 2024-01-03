// import React from 'react';

// const FAQSection = () => {
//   return (
//     <div className="mx-8 my-8">
//       <h2 className="text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
//       <div className="flex flex-wrap justify-center">
//         {/* FAQ 1 */}
//         <div className="w-full sm:w-1/2 md:w-1/3 p-4 m-4 bg-green-300 text-center">
//           <h3 className="text-xl font-bold mb-2">What courses does the airline institute offer?</h3>
//           <p className="text-gray-800">We offer a range of courses including pilot training, cabin crew training, air traffic control, and aviation management.'</p>
//         </div>

//         {/* FAQ 2 */}
//         <div className="w-full sm:w-1/2 md:w-1/3 p-4 m-4 bg-green-300 text-center">
//           <h3 className="text-xl font-bold mb-2">How long does it take to complete the pilot training program?</h3>
//           <p className="text-gray-800">The duration of our pilot training program varies depending on the type of course and individual progress. On average, it takes approximately 18-24 months</p>
//         </div>

//         {/* FAQ 3 */}
//         <div className="w-full sm:w-1/2 md:w-1/3 p-4 m-4 bg-green-300 text-center">
//           <h3 className="text-xl font-bold mb-2">Question 3</h3>
//           <p className="text-gray-800">Answer 3</p>
//         </div>

//         {/* FAQ 4 */}
//         <div className="w-full sm:w-1/2 md:w-1/3 p-4 m-4 bg-green-300 text-center">
//           <h3 className="text-xl font-bold mb-2">Question 4</h3>
//           <p className="text-gray-800">Answer 4</p>
//         </div>

//         {/* FAQ 5 */}
//         <div className="w-full sm:w-1/2 md:w-1/3 p-4 m-4 bg-green-300 text-center">
//           <h3 className="text-xl font-bold mb-2">Question 5</h3>
//           <p className="text-gray-800">Answer 5</p>
//         </div>

//         {/* FAQ 6 */}
//         <div className="w-full sm:w-1/2 md:w-1/3 p-4 m-4 bg-green-300 text-center">
//           <h3 className="text-xl font-bold mb-2">Question 6</h3>
//           <p className="text-gray-800">Answer 6</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQSection;



// import React, { useState } from "react";
// import Aboutus from '../../assets/About Us (2).png'
// const FAQSection = () => {
//     const [show, setShow] = useState(false);
//     const [show2, setShow2] = useState(false);
//     const [show3, setShow3] = useState(false);
//     const [show4, setShow4] = useState(false);

//     return (
//         <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4 bg-gray-200">
//             <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">Frequently Asked Questions</h2>
//             <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
//                 <div className=" ">
//                     <p className=" font-normal text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12 ">Here are few of the most frequently asked questions by our students</p>
//                 </div>

//                 {/* <div className=" border-b-2 border-gray-200 pb-2 flex justify-center items-center md:mt-0 mt-10 md:w-auto w-full ">
//                     <input placeholder="Search" type="text" aria-label="Search" className="lg:w-96 md:w-72 w-full focus:outline-none placeholder-gray-600 text-base font-normal text-gray-600 leading-4 " />
//                     <svg className=" cursor-pointer" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                         <path d="M14 14L10 10" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                 </div> */}
//             </div>
//             <div className=" flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
//                 <div className=" md:w-8/12 lg:w-4/12 w-full ">
//                     <img src={Aboutus} alt="Img of Glass bottle" className="w-full md:block hidden" />
//                     <img src="https://i.ibb.co/gZMfQJq/pexels-ron-lach-8128069-1-1.png" alt="Img of Glass bottle" className="w-full md:hidden block " />
//                 </div>
//                 <div className=" md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
//                     {/* <!-- Shipping Section --> */}
//                     <div>
//                         <div className=" flex justify-between items-center cursor-pointer">
//                             <h3 className=" font-semibold text-xl leading-5 text-gray-800" onMouseOver={() => setShow(!show)}>How long does it take to complete the pilot training program?</h3>
//                             <button aria-label="too" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow(!show)}>
//                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path className={show ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </button>
//                         </div>
//                         <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show ? "block" : "hidden")}>Aviation Sierra Academy provides a comprehensive three-month ground course preparing students for the Government DGCA (Directorate General of Civil Aviation) Pilot Exams. It has partnered with prestigious Flying Institutes in the South Africa, Canada, US & India, to offer top-quality practical training. After obtaining CPL from abroad, students are eligible to obtain a Commercial Pilot License (CPL) in India through DGCA, which Aviation Sierra Academy’ program will assist entirely. The practical course duration ranges from 8 to 12 months, depending on various factors. By enrolling in Aviation Sierra Academy’ pilot training program, students can expect to receive extensive teaching that will equip them with the skills and knowledge required to excel in the aviation industry.</p>
//                     </div>

//                     <hr className=" my-7 bg-gray-200" />

//                     {/* <!-- Returns Section --> */}

//                     <div>
//                         <div className=" flex justify-between items-center cursor-pointer">
//                             <h3 className=" font-semibold text-xl leading-5 text-gray-800" onMouseOver={() => setShow2(!show2)}>Can I get any financial aid or scholarship for the pilot training program?</h3>
//                             <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" >
//                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path className={show2 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </button>
//                         </div>
//                         <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show2 ? "block" : "hidden")}>Unfortunately, our academy does not offer financial aid or scholarships at this time. However, we are happy to assist and guide our students in procuring a bank loan to help cover the costs of the program. Aviation Sierra Academy has tie up with various Government and private banks for easy education loans.</p>
//                     </div>

//                     <hr className=" my-7 bg-gray-200" />

//                     {/* <!-- Exchange Section --> */}

//                     <div>
//                         <div className=" flex justify-between items-center cursor-pointer">
//                             <h3 className=" font-semibold text-xl leading-5 text-gray-800" onMouseOver={() => setShow3(!show3)}>Who is eligible for enrolling in the pilot training program?</h3>
//                             <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow3(!show3)}>
//                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path className={show3 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </button>
//                         </div>
//                         <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show3 ? "block" : "hidden")}>To enroll in the pilot training program, applicants must have cleared 10+2 with in Physics and Mathematics. They should have also passed a Class II medical checkup conducted by a DGCA-approved medical examiner. For practical training, a Class I medical checkup by Air-force medical establishment is required. Aviation Sierra Academy will guide and assist students with the medical checkup process.</p>
//                     </div>

//                     <hr className=" my-7 bg-gray-200" />

//                     {/* Tracking Section */}

//                     <div>
//                         <div className=" flex justify-between items-center cursor-pointer">
//                             <h3 className=" font-semibold text-xl leading-5 text-gray-800 "onMouseOver={() => setShow4(!show4)}>What is the student-to-flight-instructor ratio in the program?</h3>
//                             <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow4(!show4)}>
//                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path className={show4 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </button>
//                         </div>
//                         <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show4 ? "blcok" : "hidden")}>The ground course for pilot training covers various subjects, and on average, the student-to-instructor ratio should be around 1:15.</p>
//                     </div>

//                     <hr className=" my-7 bg-gray-200" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FAQSection ;


import React, { useState } from "react";
import Aboutus from '../../assets/About Us (2).png';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        "How long does it take to complete the pilot training program?",
        "Can I get any financial aid or scholarship for the pilot training program?",
        "Who is eligible for enrolling in the pilot training program?",
        "What is the student-to-flight-instructor ratio in the program?",
        "Can I get any financial aid or scholarship for the pilot training program?"
    ];

    const answers = [
        "Aviation Sierra Academy provides a comprehensive three-month ground course preparing students for the Government DGCA (Directorate General of Civil Aviation) Pilot Exams. It has partnered with prestigious Flying Institutes in the South Africa, Canada, US & India, to offer top-quality practical training. After obtaining CPL from abroad, students are eligible to obtain a Commercial Pilot License (CPL) in India through DGCA, which Aviation Sierra Academy’ program will assist entirely. The practical course duration ranges from 8 to 12 months, depending on various factors. By enrolling in Aviation Sierra Academy’ pilot training program, students can expect to receive extensive teaching that will equip them with the skills and knowledge required to excel in the aviation industry.",
        "Unfortunately, our academy does not offer financial aid or scholarships at this time. However, we are happy to assist and guide our students in procuring a bank loan to help cover the costs of the program. Aviation Sierra Academy has tie up with various Government and private banks for easy education loans.",
        "To enroll in the pilot training program, applicants must have cleared 10+2 with in Physics and Mathematics. They should have also passed a Class II medical checkup conducted by a DGCA-approved medical examiner. For practical training, a Class I medical checkup by Air-force medical establishment is required. Aviation Sierra Academy will guide and assist students with the medical checkup process.",
        "The ground course for pilot training covers various subjects, and on average, the student-to-instructor ratio should be around 1:15.",
        "Unfortunately, our academy does not offer financial aid or scholarships at this time. However, we are happy to assist and guide our students in procuring a bank loan to help cover the costs of the program. Aviation Sierra Academy has tie up with various Government and private banks for easy education loans.",
    ];

    const toggleAnswer = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4 bg-gray-200">
            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">Frequently Asked Questions</h2>
            <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
                <div>
                    <p className="font-normal text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12">Here are few of the most frequently asked questions by our students</p>
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
                <div className="md:w-8/12 lg:w-4/12 w-full">
                    <img src={Aboutus} alt="Img of Glass bottle" className="w-full md:block hidden" />
                    <img src="https://i.ibb.co/gZMfQJq/pexels-ron-lach-8128069-1-1.png" alt="Img of Glass bottle" className="w-full md:hidden block" />
                </div>
                <div className="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
                    {questions.map((question, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-center cursor-pointer" onMouseOver={() => toggleAnswer(index)}>
                                <h3 className="font-semibold text-xl p-3 leading-5 bg-gray-300 text-black rounded-md">{question}</h3>
                                <button aria-label="toggle" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className={activeIndex === index ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <p className={` text-base leading-6 bg-[#d0d0d0]  text-black text-center  font-bold  p-2 rounded-3xl   mt-4 w-11/12 ${activeIndex === index ? 'block' : 'hidden'}`}>{answers[index]}</p>
                            <hr className="my-2 bg-gray-200" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
