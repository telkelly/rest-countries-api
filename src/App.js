import React from 'react'
import Countries from './components/Countries'
import Filter from './components/Filter'
import Header from './components/Header'
  
export default function App() {
  return (
    <>
      <Header />
      <Filter />
      <Countries />
    </>
  );
}
