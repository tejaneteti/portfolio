import React from 'react'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container !mx-auto flex justify-between !py-5 !px-6 md:px-20 ">
                <a href="#home" className="font-bold">Teja Neteti</a>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar