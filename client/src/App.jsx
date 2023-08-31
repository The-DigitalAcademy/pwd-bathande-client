import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/navbar/Header'
import Banner from './components/banner/Banner'
import Footer from './components/Footer/Footer'
import Category from './components/Category/Category'
import { Login } from '../Login/Login'
import Register from '../Auth/Register'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Banner/>
      <Category/>
      <Footer/>
      <Login/>
      <Register/>
     
    </div>

  )           
}

export default App