import React from 'react';

type Props = {};

const HowWeSolve = (props: Props) => {
  return (
    <section className='w-full bg-green-50 py-16 md:py-24' id="how-zenova">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-green-900 mb-16 relative'>
          How We Solve Your Problems
          <span className='absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-700 rounded'></span>
        </h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Card 1 */}
          <div className='bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 duration-300'>
            <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-green-900 mb-3'>Reliable Deliveries, Every Time</h3>
            <p className='text-gray-700'>
              Never worry about running out of fuel. Zenova Oil delivers high-quality diesel directly to your 
              business, on schedule, so you can focus on what matters most.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className='bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 duration-300'>
            <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-green-900 mb-3'>Peace of Mind You Can Count On</h3>
            <p className='text-gray-700'>
              Our experienced team ensures a smooth and hassle-free experience. We handle everything, 
              from fuel procurement to safe delivery, so you can operate with confidence.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className='bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 duration-300'>
            <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-green-900 mb-3'>Powering Your Productivity</h3>
            <p className='text-gray-700'>
              Consistent fuel supply keeps your generators and equipment running optimally. Minimize downtime 
              and maximize productivity with reliable diesel from Zenova Oil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeSolve;
