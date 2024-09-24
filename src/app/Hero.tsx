import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='grid grid-cols-2 px-20 pt-12 h-screen w-full gap-6'>
      {/* Left Section */}
      <div className=''>
        <h2 className='text-8xl'>
          Maximum Quality. Minimum Cost.
        </h2>
        <button className='w-full mt-6 p-4 shadow-md text-white bg-green-900
        rounded-xl transition-transform hover:scale-105 hover:bg-green-950'>
          Try Our Discount
        </button>
      </div>

      {/* Right Section */}
      <div className='mx-auto mt-5 w-10/12'>
        {/* Reliability Card */}
        <div className='mb-3 p-4 bg-green-900 rounded-3xl bg-clip-padding
        backdrop-filter backdrop-blur-md bg-opacity-50'>
          <header>
            <h3 className="font-bold pb-2 text-white">Reliability</h3>
          </header>
          <p className='text-white'>
            Quality Diesel from the best suppliers. Here at Zenova, we maintain
            a <strong>customer-first</strong> policy. Whenever you need fuel,
            we've got you! Count on us for timely deliveries.
          </p>
          <span className='hover:text-green-500 text-sm text-green-300
          cursor-pointer'>Read More &rarr;</span>
        </div>

        {/* Quality Card */}
        <div className='mb-3 p-4 bg-green-900 rounded-3xl bg-clip-padding
        backdrop-filter backdrop-blur-lg bg-opacity-50'>
          <header>
            <h3 className="font-bold pb-2 text-white">Unmatched Quality</h3>
          </header>
          <p className='text-white'>
            We deliver high-quality diesel that keeps your business running at
            peak performance. Our fuel undergoes strict quality checks,
            ensuring consistent, superior results.
          </p>
          <span className='hover:text-green-500 text-sm text-green-300
          cursor-pointer'>Read More &rarr;</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
