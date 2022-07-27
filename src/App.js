import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Countries from './components/Countries'
import Filter from './components/Filter'
import Header from './components/Header'
import CountryDetail from './components/CountryDetail';
  
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={
        <><Filter /><Countries /></>
        } />
        <Route path='country-detail' element={<CountryDetail />}/>
      </Routes>
    </>
  );
}
