import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Countries from './components/Countries'
import Filter from './components/Filter'
import Header from './components/Header'
import CountryDetail from './components/CountryDetail'
  
export default function App() {
  const [lightMode, setLightMode] = useState(false)

  const switchMode = () => {
    setLightMode((prevState) =>!prevState)
  }

  return (
    <div className={`app ${lightMode ? 'lightMode' : ''}`}>
      <Header onClick={switchMode} lightMode={lightMode} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter lightMode={lightMode} />
              <Countries lightMode={lightMode} />
            </>
          }
        />
        <Route path="country-detail" element={<CountryDetail lightMode={lightMode} />} />
      </Routes>
    </div>
  );
}
