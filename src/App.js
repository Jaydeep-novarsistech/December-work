// import React from 'react'
// import Navbar from './Components/Header/Header'
// import HomePage from './Components/Hero/Hero'
// import Tranning from './Components/Tranning/Tranning'
// import YoutubeVideo from './Components/Youtube/Youtube'
// import ImageSlider from './Components/CourseSlider/CourseSlider'
// import Facilites from './Components/Faciaties/Facilites'
// import Map from './Components/Map/Map'
// import StudentReviews from './Components/StudentReviews/StudentReviews'
// import FAQSection from './Components/FAQ-Section/Faq-section'
// import Placement from './Components/Placement/Placement'
// import Information from './Components/Information/Information'
// import EnquiryForm from './Components/EnquiryFrom/EnquiryFrom'
// import Footer from './Components/Footer/Footer'
// import ExtraSection from './Components/ExtraSection/ExtraSection'
// import Hero from './Components/AboutPages/Hero/Hero'
// import LeaderShip from './Components/AboutPages/LeaderShip/LeaderShip'
// import Awards from './Components/AboutPages/Awards/Awards'
// import Carousel from './Components/AboutPages/Carousel/Carousel'
// import About from './Components/AboutPages/About'
// import PlacementSection from './Components/PlacementSection/Placement'
// import ContactUsPage from './Components/ContecUsPage/ContactUsPage'
// import MainHomeSection from './Components/MainHomeSection/MainHomeSection'

// const App = () => {
//   return (
//     <div className='bg-gray-200'>
//       {/* <Navbar/>
//       <HomePage/>
//       <Tranning />
//       <YoutubeVideo/>
//       {/* <ImageSlider/>  
//       <ExtraSection/>
//       <Facilites/>
//       <Map/>
//       <StudentReviews/>
//       <FAQSection/>
//       <Placement/>
//       <Information/>
//       <EnquiryForm/>
//       <Footer/> */}

//       <MainHomeSection/>
//      {/* <About/>

//      <PlacementSection/>

//      <ContactUsPage/> */}
//     </div>
//   )
// }

// export default App





import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainHomeSection from './Components/MainHomeSection/MainHomeSection.jsx';
import About from './Components/AboutPages/About.jsx';
import PlacementSection from './Components/PlacementSection/PlacementSection.jsx';
import ContactUsPage from './Components/ContecUsPage/ContactUsPage.jsx';
import PlacementSectionList from './Components/PlacementSection/PlacementSection.jsx';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
const App = () => {
  return (
 <>
      <div className='bg-gray-200'>
        <Routes>
          <Route path="/" element={<MainHomeSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/placement" element={<PlacementSection />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
        <ScrollUpButton />
      </div>
     
      </>
  );
};

export default App;
