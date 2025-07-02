import menuInOrange from "../assets/icons/menu-icon-inOrange.png"
import menuInBeige from "../assets/icons/menu-icon-inBeige.png"
const Navbar = ({isHomePage ,setIsHomePage}) => {
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
