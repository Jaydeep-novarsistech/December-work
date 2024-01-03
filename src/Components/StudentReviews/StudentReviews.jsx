// import React from 'react';

// const StudentReviews = () => {
//   const reviews = [
//     { id: 1, content: "Excellent course! Learned a lot.", author: "John Doe", imageUrl: "image1.jpg" },
//     { id: 2, content: "Great teaching methods.", author: "Jane Smith", imageUrl: "image2.jpg" },
//     { id: 3, content: "Highly recommend this program.", author: "Bob Johnson", imageUrl: "image3.jpg" },
//     // Add more reviews as needed
//   ];

//   return (
//     <div className="container mx-auto my-8">
//       <h2 className="text-3xl font-bold mb-6 text-center">Student Reviews</h2>
//       <div className="flex flex-wrap justify-center">
//         {reviews.map((review) => (
//           <div key={review.id} className="w-full sm:w-1/2 md:w-1/3 p-4">
//             <div className="bg-white border rounded p-6 shadow-md">
//               {review.imageUrl && (
//                 <img src={review.imageUrl} alt={`Image for ${review.author}`} className="w-full h-auto mb-4" />
//               )}
//               <p className="text-gray-800 mb-4">{review.content}</p>
//               <p className="text-gray-600 font-bold">{review.author}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StudentReviews;







import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';

const StudentReviews = () => {
  const reviews = [
    { title: 'Review 1', content: 'Excellent course! Learned a lot.', backgroundImage: 'image1.jpg' },
    { title: 'Review 2', content: 'Great teaching methods.', backgroundImage: 'image2.jpg' },
    { title: 'Review 3', content: 'Highly recommend this program.', backgroundImage: 'image3.jpg' },
    { title: 'Review 1', content: 'Excellent course! Learned a lot.', backgroundImage: 'image1.jpg' },
    { title: 'Review 2', content: 'Great teaching methods.', backgroundImage: 'image2.jpg' },
    { title: 'Review 3', content: 'Highly recommend this program.', backgroundImage: 'image3.jpg' },
    // Add more reviews as needed
  ];

  return (
    <div className="flex items-center justify-center flex-col mt-24 mb-20 bg-gray-200">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
        autoplay={{
          delay: 300, // Adjust the delay as needed (in milliseconds)
          disableOnInteraction: false,
        }}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            {/* Individual slide content goes here */}
            <div className="flex flex-col gap-6   mb-20 group relative shadow-lg bg-white text-black rounded-xl overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})`, height: '100%' }}
              />
              <div className="absolute inset-0 bg-white opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3 p-6 hover:bg-sky-700">
                <RxArrowTopRight className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                <p className="lg:text-[18px]">{item.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudentReviews;
