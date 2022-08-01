import React from 'react';
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header({onClick, lightMode}) {
  return (
      <>
          <header className={`header ${lightMode ? 'lightMode' : ''}`}>
              <h1>Where in the world?</h1>
              <div className='mode' onClick={onClick}>
                  <LightModeIcon/><p>Light mode</p>
              </div>
          </header>
      </>
  )
}