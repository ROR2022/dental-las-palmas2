import React, { useState, useEffect } from 'react'
import '../estilos/header.css'
import MenuV from './MenuV'

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);

  const mostrarMenu = ()=>{
    setMenu(prev=>!prev);
  }
  

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }
  return (
      <div>
          <div className='cab-cont'>
        <img className="logo" src="images/logonew1.png" alt="" />
            <div className='tit-cont'>
            <h2 className='titulo'>Las Palmas</h2>
            <h3 className='subtitulo'>clinica dental</h3>
            </div>
        <div onClick={mostrarMenu} className='logo2-cont'>
            <img className="logo2" src="images/iconomenu.png" alt="" />
        </div>      
        </div>
        {isReadyForInstall && <button className='btn-instalar' onClick={downloadApp}> Instalar </button>}
        {menu && <MenuV/>}
      </div>
    
  )
}

export default Header