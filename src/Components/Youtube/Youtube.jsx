// src/components/YoutubeVideo.js

import React from 'react';

const YoutubeVideo = () => {
  return (
    <div className="flex flex-col items-center mb-28  bg-gray-200"> {/* Added mb-8 for bottom margin */}
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-12 mt-12 uppercase">Our YouTube Video</h1>


      {/* YouTube Video */}
      <div className="flex justify-center items-center w-full max-w-screen-md h-96 overflow-hidden bg-gray-200 rounded">
        {/* You can embed your YouTube video here */}
        {/* Replace 'YOUR_YOUTUBE_EMBED_CODE' with the actual embed code from YouTube */}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/mpJb9GNxdYI?si=BIwYx6iGO9jHQGjX"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeVideo;
