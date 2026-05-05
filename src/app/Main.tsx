import React from 'react'
import Hero from './Hero'
import WhyUs from './WhyUs'
import Testimonials from './Testimonials'
import Services from './Services'
import TrustSignals from './TrustSignals'
import OrderAppSection from './OrderAppSection'
import Contact from './Contact'

type Props = {}

const Main = (props: Props) => {
  return (
    <main className="pt-16 md:pt-20">
      <Hero />
      <WhyUs />
      <Testimonials />
      <Services />
      <TrustSignals />
      <OrderAppSection />
      <Contact />
    </main>
  )
}

export default Main
