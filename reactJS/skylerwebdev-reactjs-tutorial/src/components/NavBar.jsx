import React from 'react'
import { NavLink as NL } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <NL className="link" to='/'>Home</NL>
            <NL className="link" to='/about'>About</NL>
            <NL className="link" to='/contact'>Contact</NL>
        </div>
    )
}

export default NavBar
