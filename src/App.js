import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./containers/Home/Home"
import Features from './containers/Features/Features'
import Pricing from './containers/Pricing/Pricing'
import Faq from './containers/Faq/Faq'
import Benefits from './containers/Benefits/Benefits'
import Contact from './containers/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="features" element={ <Features/> } />
        <Route path="pricing" element={ <Pricing/> } />
        <Route path="faq" element={ <Faq/> } />
        <Route path="benefits" element={ <Benefits/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default App