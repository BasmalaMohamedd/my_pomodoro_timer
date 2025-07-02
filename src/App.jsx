import React, { useState } from 'react'

import Navbar from "./components/Navbar"
import Header from './components/Header';
import Timer from './components/Timer';

function App() {
    const [isHomePage, setIsHomePage] = useState(true);
  
  return (
    <>
      <Navbar 
        isHomePage={isHomePage}
        setIsHomePage={setIsHomePage}
      />
      <main>
        <div>
          <Header 
          isHomePage={isHomePage}
          />
          <Timer />
          
        </div>
          
      </main>
      <footer>
        <p>
            Figma: <a href="https://www.figma.com/design/9ivq0ik74eDDixoEluNA7f/Untitled?node-id=0-1&p=f&t=TQhl8NFK8grWsRir-0">View Mobile and Desktop design</a>
        </p>
      </footer>
        
      
    </>
  )
}

export default App
