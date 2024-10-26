import React from 'react'
import Header from './components/Header';
import Home from './components/Home'
import Footer from './components/Footer'
import Pricing from './components/Pricing'
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        <Pricing></Pricing>
    </div>
  )
}

export default App;