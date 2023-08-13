import '../css/navigation.css'
import logo from '../images/logo.svg'
import iconMenu from '../images/icon-menu.svg'
import iconClose from '../images/icon-close.svg'
import { useState } from 'react'


const Nav = () => {
  const navLists = ["Collections", "Men", "Women", "About", "Contact"];
  const [activeList, setActiveList] = useState("Men");
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="nav-container">
      <div className="desktop flex center">
        <img src={iconMenu} className="icon-menu" onClick={toggleMenu} alt="" />
        <img src={logo} className="logo" alt="logo" />
        <ul className="desktop-menu flex">
          {navLists.map((navList) => (
            <li
              key={navList}
              className={navList === activeList ? "active" : ""}
              onClick={() => setActiveList(navList)}
            >
              {navList}
            </li>
          ))}
        </ul>
        {showMenu && (
          <div>
            <div className="mask" onClick={closeMenu}></div>
            <ul className="mobile-menu">
                {navLists.map(navList => <li key={navList}>{navList}</li>)}
            </ul>
            <img
              src={iconClose}
              className="icon-close"
              onClick={closeMenu}
              alt=""
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;