import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { SiDatabricks } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  return (
    <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <SiDatabricks className='icon' style={{ fontSize: "30px"}} />
                    <h1>Your Books</h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link className="link" to='/'>Home</Link></li>
                    <li><Link className="link" to='/books'>Books</Link></li>
                    <li><Link className="link" to='/addbooks'>Add Books</Link></li>
                </ul>
                <div className="hamburger" style={{ fontSize: "22px"}} onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes style={{ color: "white" }} className='icon' />)}
                </div>
            </div>
        </div>
  );
};

export default Navbar;
