import React from 'react'
import NavBar from './NavBar'
import Main from './Main'
import Footer from './Footer'
type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className="bg-[url('/back1.jpg')]">
      <div className="">
        <NavBar />
        <Main></Main>
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage
