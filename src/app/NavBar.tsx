import Image from 'next/image'
import React from 'react'
import Logo from '/public/zenova.png'
import Link from 'next/link'
type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav className="w-full shadow-m mx-auto rounded-2xl bg-green-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 ">
      <div className="text-white text-opacity-80 flex justify-between items-center h-full w-full p-4">
        <Image src={Logo} alt="logo" width={100} height={100} />
        <div>
          <ul className="hidden sm:flex">
            <Link href="#home" className="navbar-item">
              <li className="ml-10 hover:border-b-4 border-slate-950 text-md" data-navbar-link>Home</li>
            </Link>
            <Link href="#why-zenova">
              <li className="navbar-item">
                <span className="ml-10 hover:border-b-4 border-slate-950 text-md" data-navbar-link>Why Zenova?</span>
              </li>
            </Link>
            <Link href="#how-zenova">
              <li className="navbar-item">
                <span className="ml-10 hover:border-b-4 border-slate-950 text-md" data-navbar-link>How Zenova?</span>
              </li>
            </Link>
            <Link href="#product-service">
              <li className="navbar-item">
                <span className="ml-10 hover:border-b-4 border-slate-950 text-md" data-navbar-link>Our offers?</span>
              </li>
            </Link>
            <Link href="#contact">
              <li className="navbar-item">
                <span className="ml-10 hover:border-b-4 border-slate-950 text-md" data-navbar-link>Contact us</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
