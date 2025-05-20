import React from 'react';
import Image from 'next/image';

type Props = {};

const WhyUs = (props: Props) => {
  return (
    <section className='bg-white w-full py-16 md:py-24' id="why-zenova">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-green-900 mb-16 relative'>
          Why Choose Zenova Oil?
          <span className='absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-700 rounded'></span>
        </h2>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Image Section */}
          <div className='relative'>
            <div className='relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg'>
              <Image 
                src="/zenova3.jpg" 
                alt="Why choose Zenova Oil" 
                fill
                className='object-cover'
              />
            </div>
            <div className='absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-green-900 hidden md:flex items-center justify-center text-white'>
              <div className='text-center'>
                <p className='font-bold text-xl'>100%</p>
                <p className='text-sm'>Customer Satisfaction</p>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div>
            <p className='text-gray-700 text-lg mb-8'>
              Power your business with confidence. Zenova Oil delivers high-quality diesel fuel directly to you, 
              ensuring reliable performance and on-time service. We're Abuja's trusted partner for businesses 
              that keep the city running.
            </p>
            <p className='text-gray-700 text-lg mb-8'>
              Get a discount today and see the Zenova difference.
            </p>
            
            {/* Stats */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8'>
              <div className='p-4 bg-green-50 rounded-lg shadow-md text-center'>
                <p className='text-3xl font-bold text-green-900'>231+</p>
                <p className='text-sm text-gray-700'>Litres Delivered and Counting!</p>
              </div>
              <div className='p-4 bg-green-50 rounded-lg shadow-md text-center'>
                <p className='text-3xl font-bold text-green-900'>99.8%</p>
                <p className='text-sm text-gray-700'>On-Time Delivery Rate</p>
              </div>
              <div className='p-4 bg-green-50 rounded-lg shadow-md text-center'>
                <p className='text-3xl font-bold text-green-900'>21+</p>
                <p className='text-sm text-gray-700'>Successful Deliveries</p>
              </div>
            </div>
            
            <button className='px-8 py-4 bg-green-900 text-white rounded-xl shadow-lg hover:bg-green-800 
                transition-all transform hover:scale-105 font-semibold'>
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
