import React from 'react'
import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='w-full' id="home">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Left Section */}
          <div className='order-2 md:order-1 flex flex-col justify-center mt-16 md:mt-0'>
            <p className='text-green-700 font-semibold text-lg mb-2'>Zenova Oil: Your trusted partner for high-quality diesel fuel in Abuja</p>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-green-900 leading-tight mb-6'>
              Never Run Dry. Power Your Business with Reliable Diesel Delivery.
            </h1>
            <p className='text-gray-700 mb-8 text-lg'>
              Ensuring reliable performance and on-time service to keep your business running smoothly.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <button className='px-8 py-4 bg-green-900 text-white rounded-xl shadow-lg 
                  hover:bg-green-800 transition-all transform hover:scale-105 font-semibold'>
                Get a Discount Today!
              </button>
              <button className='px-8 py-4 border-2 border-green-900 text-green-900 rounded-xl
                  hover:bg-green-50 transition-all font-semibold'>
                Learn More
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className='order-1 md:order-2 relative mb-16 sm:mb-20'>
            <div className='relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl'>
              <Image 
                src="/back3.jpg" 
                alt="Hero image of Zenova Oil diesel delivery" 
                fill
                className='object-cover rounded-2xl transform transition-transform hover:scale-105 duration-700'
                priority
              />
            </div>
            
            {/* Stats Cards */}
            <div className='absolute -bottom-10 left-0 right-0 grid grid-cols-3 gap-4 px-4'>
              <div className='bg-white p-3 rounded-lg shadow-lg text-center'>
                <p className='text-green-900 font-bold text-xl sm:text-2xl'>231+</p>
                <p className='text-xs sm:text-sm text-gray-700'>Litres Delivered</p>
              </div>
              <div className='bg-white p-3 rounded-lg shadow-lg text-center'>
                <p className='text-green-900 font-bold text-xl sm:text-2xl'>99.8%</p>
                <p className='text-xs sm:text-sm text-gray-700'>On-Time Rate</p>
              </div>
              <div className='bg-white p-3 rounded-lg shadow-lg text-center'>
                <p className='text-green-900 font-bold text-xl sm:text-2xl'>21+</p>
                <p className='text-xs sm:text-sm text-gray-700'>Deliveries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
