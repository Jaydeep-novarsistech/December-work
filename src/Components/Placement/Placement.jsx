import React from 'react';

const Placement = () => {
  return (
    <div className="bg-gray-200">
      <div className="container flex justify-center mx-auto pt-16">
        <div className='text-center'>

          <h1 className="xl:text-4xl text-3xl text-center mb-5 text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">Placements</h1>
        </div>
      </div>

      <div className="w-full bg-gray-200 px-10 pt-10 ">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">

            {/* Individual Cards */}
            {[
              {
                name: 'Andres Berlin',
                role: 'Chief Executive Officer',
                image: 'https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif',
                description: 'The CEO\'s role in raising a company\'s corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.',
              },
              {
                name: 'Silene Tokyo',
                role: 'Product Design Head',
                image: 'https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif',
                description: 'The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.',
              },
              {
                name: 'Johnson Stone',
                role: 'Manager Development',
                image: 'https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif',
                description: 'Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.',
              },
              {
                name: 'Dean Jones',
                role: 'Principal Software Engineer',
                image: 'https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg',
                description: 'An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field.',
              },
              {
                name: 'Rachel Adams',
                role: 'Product Design Head',
                image: 'https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg',
                description: 'Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them life.',
              },
              {
                name: 'Charles Keith',
                role: 'UX Designer',
                image: 'https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif',
                description: 'A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don\'t just experience user interface but also question it.',
              },
            ].map((person, index) => (
              <div key={index} className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded overflow-hidden shadow-md bg-white hover:bg-sky-700 hover:color-black">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img src={person.image} alt={person.name} className="rounded-full object-cover h-full w-full shadow-md" />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-3xl text-center pb-1">{person.name}</div>
                    <p className="text-gray-800 text-sm text-center">{person.role}</p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">{person.description}</p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.14 5.14 0 0 0 19.55 2s-1.63-.54-5.35 2.09a19.39 19.39 0 0 0-10 0C5.18 1.46 3.55 2 3.55 2A5.14 5.14 0 0 0 3 4.77 5.44 5.44 0 0 0 5 9.49c0 5.46 3.3 6.65 6.44 7a3.37 3.37 0 0 0-.94 2.61V22" />
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                            <path d="M23 2.5v19a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-19a.5.5 0 0 1 .5-.5h22a.5.5 0 0 1 .5.5zM18.5 6.5v11.8l-2.2-1.1a4.4 4.4 0 0 0 2.2-3.8V8.9l-.5.2-5.5 5.5-5.5-5.5-.5-.2V13a4.4 4.4 0 0 0 2.2 3.8l-2.2 1.1V6.5a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5z" />
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                            <path d="M4 4.47C4 3.67 4.67 3 5.47 3s1.47.67 1.47 1.47S6.27 6 5.47 6 4 5.33 4 4.47zM2 3v4h2V3H2zm2 18H2v-8h2v8zM2 13.5C2 12.12 3.12 11 4.5 11S7 12.12 7 13.5 5.88 16 4.5 16 2 14.88 2 13.5zM22 9h-2V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3v3H9V3h2v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3h2v3a3 3 0 0 0 3 3a3 3 0 0 0 3-3V9z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Placement;
