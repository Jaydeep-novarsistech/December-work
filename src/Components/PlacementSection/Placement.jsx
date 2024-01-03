import React from 'react';

const profiles = [
  {
    name: 'Hentoni Doe',
    role: 'CEO-Founder',
    image: 'https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg',
  },
  {
    name: 'Jonathan Doe',
    role: 'Chief Technical Officer',
    image: 'https://tailus.io/sources/blocks/classic/preview/images/man.jpg',
  },
  {
    name: 'Hentoni Doe',
    role: 'CEO-Founder',
    image: 'https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg',
  },
  {
    name: 'Hentoni Doe',
    role: 'CEO-Founder',
    image: 'https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg',
  },
  {
    name: 'Jonathan Doe',
    role: 'Chief Technical Officer',
    image: 'https://tailus.io/sources/blocks/classic/preview/images/man.jpg',
  },
  {
    name: 'Hentoni Doe',
    role: 'CEO-Founder',
    image: 'https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg',
  },
  // Add more profiles as needed
];

const PlacementSection = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Tailus blocks leadership</h2>
          <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
            Tailus prides itself not only on award-winning technology but also on the talent of its people, some of the
            brightest minds and most experienced executives in business.
          </p>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">
          {profiles.map((profile, index) => (
            <div key={index} className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src={profile.image}
                alt={profile.name}
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl">{profile.name}</h4>
                <span className="block text-sm text-gray-500">{profile.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementSection;
