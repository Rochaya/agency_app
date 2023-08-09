import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Cross from '/src/assets/cross.png'
import Hamburger from '/src/assets/hamburger.png'

export default function Navbar({ toggleMode, nightMode }) {
    const [showNav, setShowNav] = useState(false)
    const location = useLocation();

    return (
        <nav className="nav-container top-10 w-full h-40 flex justify-center rounded-full items-center sm:h-20">
            <ul className={`${showNav ? 'flex' : 'hidden'} list-container flex-col  items-center w-50 absolute top-2 pb-5 sm:flex sm:relative sm:flex-row sm:justify-center sm:top-0`}>
                <li className="list-elem mt-2 sm:mb-0">
                  <Link to="/" className={`link text-white py-1 mx-1 sm:py-0 
                    ${location.pathname === '/' ? 'active' : ''}`}>
                    Accueil
                  </Link>
                </li>
                <li className="list-elem mt-2 sm:mb-0">
                  <Link to="/works" className={`link text-white py-1 mx-1 sm:py-0 
                    ${location.pathname === '/works' ? 'active' : ''}`}>
                    Works
                  </Link>
                </li>
                <li className="list-elem mt-2 sm:mb-0">
                  <Link to="/about" className={`link text-white py-1 mx-1 sm:py-0 
                    ${location.pathname === '/about' ? 'active' : ''}`}>
                    About
                  </Link>
                </li>
            </ul>
            <button onClick={() => setShowNav(!showNav)} className="ml-auto sm:hidden flex items-center">
                <span className={`${!showNav ? 'absolute left-1/2 transform -translate-x-1/2' : 'hidden'} span-nav`}>Websitic</span>
                <img className="icon" src={showNav ? Cross : Hamburger} alt="icon" />
            </button>
        </nav>
    )
}
