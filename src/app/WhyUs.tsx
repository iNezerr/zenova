import React from 'react';

type Props = {};

const WhyUs = (props: Props) => {
  return (
    <section className='grid grid-cols-2 gap-6 items-center px-20 py-12 h-auto bg-white'>
      {/* Left Text Section */}
      <div>
        <h2 className='text-6xl font-bold text-green-900 leading-tight mb-4'>
          Why Choose Us
        </h2>
        <p className='text-xl text-gray-700 mb-6'>
          We provide high-quality diesel supply services tailored to your business needs.
          With years of experience, we ensure seamless delivery, top-notch customer service,
          and fuel efficiency, helping you reduce operational costs.
        </p>
        {/* Buttons */}
        <div className='flex gap-4'>
          <button className='px-6 py-3 bg-green-900 text-white rounded-lg shadow hover:bg-green-700 transition-all'>
            Watch Video
          </button>
          <button className='px-6 py-3 bg-gray-200 text-green-900 rounded-lg shadow hover:bg-gray-300 transition-all'>
            Learn More &rarr;
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div>
        <img
          src='/zenova3.jpg'
          alt='Why choose us illustration'
          className='w-full h-auto rounded-lg shadow-lg object-cover'
        />
      </div>
    </section>
  );
};

export default WhyUs;
