import React, { useState } from 'react'
import menuInOrange from "../assets/icons/menu-icon-inOrange.png"
import menuInBeige from "../assets/icons/menu-icon-inBeige.png"
const Navbar = () => {
  //move state to the parent
  const [isHomePage, setIsHomePage] = useState(true);
  function toggle(){
    setIsHomePage(prev=>!prev);
    //open menu and close it based on isHomePage
  }
  return (
    
      <header>
        <nav>
          <button onClick={toggle} className='menu-icon-button'>
            {
              isHomePage? 
              <img src={menuInOrange} alt="menu icon" className="menu-icon"/>:
              <img src={menuInBeige} alt="menu icon" className="menu-icon"/>
            }
          </button>
        </nav>
      </header>
    
  )
}

export default Navbar
