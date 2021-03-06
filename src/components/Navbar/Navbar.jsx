import React, { useState } from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import {motion} from 'framer-motion';

const Logo = "https://i.postimg.cc/x1PLDhvT/Brendan-Frisby-logos-black.png"
// const logo2 = "https://iili.io/hpRBCN.jpg"
const logo2 = "https://iili.io/hpRJYg.png"
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="nav__navbar">
      <div className="nav__navbar-logo">
        <img src={logo2} alt="logo" id='logo'></img>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}> { item } </a>
            </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={(() => setToggle(true))} />

      { toggle && (
        <motion.div
          whileInView={{x: [300, 0]}}
          transition={{duration: 0.85, ease: 'easeOut'}}
        >
          <HiX onClick={(() => setToggle(false))}  />
          
          <ul className="app__navbar-links">
          {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
              <li  key={item}>
              <a href={`#${item}`}
              onClick={(() => setToggle(false))} 
              > 
                { item }  
              </a>
            </li>
        ))}
          </ul>
        </motion.div>
      )}

      </div>
    </nav>
  )
}

export default Navbar;