import React from 'react';
import Image from 'next/image';

type Props = {};

const Services = (props: Props) => {
  return (
    <section className='w-full bg-white py-16 md:py-24' id="product-service">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-green-900 mb-16 relative'>
          Our Products and Services
          <span className='absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-700 rounded'></span>
        </h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16'>
          {/* Services List 1 */}
          <div className='space-y-8'>
            <div className='flex gap-4'>
              <div className='flex-shrink-0 bg-green-100 w-14 h-14 rounded-full flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className='text-xl font-bold text-green-900 mb-2'>High-Quality Diesel Fuel</h3>
                <p className='text-gray-700'>
                  We offer a variety of diesel fuel grades to meet your specific engine requirements, ensuring optimal performance and efficiency.
                </p>
              </div>
            </div>
            
            <div className='flex gap-4'>
              <div className='flex-shrink-0 bg-green-100 w-14 h-14 rounded-full flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className='text-xl font-bold text-green-900 mb-2'>On-Site Delivery & Refueling</h3>
                <p className='text-gray-700'>
                  Our reliable delivery team brings the fuel directly to your location, eliminating the need for you to manage transportation.
                </p>
              </div>
            </div>
          </div>
          
          {/* Center Image */}
          <div className='relative h-[300px] rounded-xl overflow-hidden shadow-xl mx-auto'>
            <Image 
              src="/zenova.png" 
              alt="Zenova Oil Services" 
              fill
              className='object-contain'
            />
          </div>
        </div>
        
        {/* Additional Services */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex gap-4'>
            <div className='flex-shrink-0 bg-green-100 w-14 h-14 rounded-full flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className='text-xl font-bold text-green-900 mb-2'>24/7 Customer Support</h3>
              <p className='text-gray-700'>
                Our dedicated customer support team is available 24/7 to answer your questions and address any concerns promptly.
              </p>
            </div>
          </div>
          
          <div className='flex gap-4'>
            <div className='flex-shrink-0 bg-green-100 w-14 h-14 rounded-full flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className='text-xl font-bold text-green-900 mb-2'>Competitive Pricing & Flexible Payment Options</h3>
              <p className='text-gray-700'>
                We offer competitive fuel prices and flexible payment plans to fit your budget. Get a free quote today and discover the Zenova Oil difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
