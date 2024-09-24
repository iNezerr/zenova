import React from 'react'
import NavBar from './NavBar'
import Main from './Main'
import Footer from './Footer'
type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className="bg-[url('/back3.jpg')] min-h-screen max-h-screen">
      <div className="px-20 pt-12">
        <NavBar />
        <Main></Main>
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage
