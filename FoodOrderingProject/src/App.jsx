import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.Jsx'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Header from './components/header/Header.jsx'
import ExploreMenu from './components/ExploreMenu/ExploreMenu.jsx'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <ExploreMenu />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element = {<Header />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
  )
}

export default App

