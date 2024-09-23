import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='grid grid-cols-2 px-20 pt-12 h-screen w-full text-wrap gap-6'>
      <div className='m-0 p-0'>
        <h2 className='text-8xl'>
          Maximum Quality. Minumum Cost.
        </h2>
        <button className='w-full shadow-m hover:bg-green-950  p-4
        bg-green-900 rounded-xl bg-clip-padding backdrop-filter
        backdrop-blur-lg bg-opacity-20'>
          Try Our Discount
        </button>
      </div>
      <div className='mx-auto mt-5 w-10/12'>
        <div className='mb-3 p-4 bg-green-900 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50'>
          <header>
            <h3 className="font-bold pb-2">Reliability</h3>
          </header>
          <p>Quality Diesel fron the best suppliers. Here at Zenova, we have a <strong>customer-first </strong> policy
            At whatever time you need your fuel, we've got you! You can count on us.</p>
          <span className='hover:text-green-500 text-sm text-green-900 cursor-pointer'>Read More</span>
        </div>
        <div className='mb-3 p-4 bg-green-900 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50'>
          <header>
            <h3 className="font-bold pb-2">Reliability</h3>
          </header>
          <p>Quality Diesel fron the best suppliers. Here at Zenova, we have a <strong>customer-first </strong> policy
            At whatever time you need your fuel, we've got you! You can count on us.</p>
          <span className='hover:text-green-500 text-sm text-green-900 cursor-pointer'>Read More</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
