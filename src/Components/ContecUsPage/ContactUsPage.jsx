import React from 'react'
import Navbar from '../Header/Header'
import Information from '../Information/Information'
import Footer from '../Footer/Footer'
import EnquiryForm from '../EnquiryFrom/EnquiryFrom'
import MapContectus from './Map'


const ContactUsPage = () => {
  return (
    <div>
      <Navbar/>
      <MapContectus/>
      <Information/>
      <EnquiryForm/>
      <Footer/>
    </div>
  )
}

export default ContactUsPage
