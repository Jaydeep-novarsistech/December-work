import React from 'react'
import Navbar from '../Header/Header'
import HomePage from '../Hero/Hero'
import Tranning from '../Tranning/Tranning'
import YoutubeVideo from '../Youtube/Youtube'
import ExtraSection from '../ExtraSection/ExtraSection'
import Facilities from '../Faciaties/Facilites'
import Map from '../Map/Map'
import StudentReviews from '../StudentReviews/StudentReviews'
import FAQSection from '../FAQ-Section/Faq-section'
import Placement from '../Placement/Placement'
import Information from '../Information/Information'
import EnquiryForm from '../EnquiryFrom/EnquiryFrom'
import Footer from '../Footer/Footer'
const MainHomeSection = () => {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Tranning />
      <YoutubeVideo/>
      <ExtraSection/>
      <Facilities/>
      <Map/>
      <StudentReviews/>
      <FAQSection/>
      <Placement/>
      <Information/>
      <EnquiryForm/>
      <Footer/>
    </div>
  )
}

export default MainHomeSection
