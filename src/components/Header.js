import React from 'react';
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header() {
  return (
      <>
          <header className='header'>
              <h1>Where in the world?</h1>
              <div className='mode'>
                  <LightModeIcon/><p>Light mode</p>
              </div>
          </header>
      </>
  )
}