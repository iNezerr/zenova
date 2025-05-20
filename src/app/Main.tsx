import React from 'react'
import Hero from './Hero'
import WhyUs from './WhyUs'
import HowWeSolve from './HowWeSolve'
import Services from './Services'
import Contact from './Contact'

type Props = {}

const Main = (props: Props) => {
  return (
    <main className="pt-16 md:pt-20">
      <Hero />
      <WhyUs />
      <HowWeSolve />
      <Services />
      <Contact />
    </main>
  )
}

export default Main
