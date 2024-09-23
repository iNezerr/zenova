import React from 'react'
import NavBar from './NavBar'
import Main from './Main'
type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className="bg-[url('/back1.jpg')] bg-transparent [bg-gradient-to-br] from-blue-500 via-purple-500 to-pink-500 px-20 pt-12 min-h-screen">
      <NavBar />
      <Main></Main>
    </div>
  )
}

export default LandingPage
