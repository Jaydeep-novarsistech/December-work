// src/components/YoutubeVideo.js

import React from 'react';
import Aboutus from '../../assets/About Us (8).png'
const Map = () => {
  return (
    <div className="flex flex-col items-center  bg-gray-200"> {/* Added mb-8 for bottom margin */}
      {/* Heading */}
      <h2 className="text-5xl font-bold mb-12 mt-12 uppercase">Training Locations </h2>

      {/* YouTube Video */}
      <div className="flex justify-center items-center w-full max-w-screen-md h-96 overflow-hidden bg-white rounded-xl">
        {/* You can embed your YouTube video here */}
        {/* Replace 'YOUR_YOUTUBE_EMBED_CODE' with the actual embed code from YouTube */}
        <img
          width="100%"
          height="100%"
          src={Aboutus}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></img>
      </div>
    </div>
  );
};

export default Map;
