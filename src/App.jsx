// import { useState } from 'react'
import './App.css'
import Banner from './components.jsx/Banner'
import Navbar from './components.jsx/navbar'

// One place to control the whole brand gradient
export const BRAND_GRADIENT = "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600";

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  )
}

export default App
