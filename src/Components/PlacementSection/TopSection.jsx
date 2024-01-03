// import React from "react";

// const TopSection = () => {
//     return (
//         <div className="dark:bg-gray-900">
//             <div className="container mx-auto py-9 md:py-12 lg:py-24">
//                 <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
//                     <div className="lg:w-4/12 flex justify-center items-center">
//                         <div>
//                             <h1 className="dark:text-white text-4xl md:text-5xl xl:text-6xl font-semibold text-gray-900 w-7/12">Amoire</h1>
//                             <p className="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
//                         </div>
//                     </div>
//                     <div className="lg:w-5/5 mt-6 md:mt-8 lg:mt-0">
//                         <div className="relative w-full h-50">
//                             <img src="https://i.ibb.co/gmV2mLr/pexels-maksim-goncharenok-4352247-1-1-1.png" alt="A lounge sofa" className="w-full h-50 relative hidden lg:block" />
//                             <img src="https://i.ibb.co/Mhgkt2f/pexels-maksim-goncharenok-4352247-1-1-1.png" alt="A lounge sofa" className="w-full h-full lg:hidden" />
//                             <div className="hidden lg:block absolute bottom-0 right-0 bg-red-200 w-1/2">
                               
//                             </div>
//                         </div>
                        
                           
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TopSection;



import React from 'react'

const TopSection = () => {
  return (
    <div>
      <section class=" dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
        
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
        </div>                
    </div>
</section>
    </div>
  )
}

export default TopSection
