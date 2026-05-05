import React from 'react'
import NavBar from './NavBar'
import Main from './Main'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: 'var(--navy)' }}>
      <NavBar />
      <Main />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}


export default LandingPage
