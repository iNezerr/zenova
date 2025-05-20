import React from 'react'
import NavBar from './NavBar'
import Main from './Main'
import Footer from './Footer'
import SupportButton from './SupportButton'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <NavBar />
      <Main />
      <Footer />
      <SupportButton />
    </div>
  )
}


export default LandingPage
