import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./containers/Home/Home"
import Features from './containers/Features/Features'
import Pricing from './containers/Pricing/Pricing'
import Faq from './containers/Faq/Faq'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="features" element={ <Features/> } />
        <Route path="pricing" element={ <Pricing/> } />
        <Route path="faq" element={ <Faq/> } />
      </Routes>
    </div>
  )
}

export default App