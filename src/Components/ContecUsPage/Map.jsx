import React from 'react';

const MapContactUs = () => {
  return (
    <div className="w-full lg:w-4/5 h-96 mx-auto rounded-xl overflow-hidden border border-gray-300">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.577963358877!2d75.89947007508307!3d22.743922779370113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd53035d9423%3A0xb6e8b915b99246ca!2sMR%209%20Rd%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1702620107685!5m2!1sen!2sin"
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapContactUs;
