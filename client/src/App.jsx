import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/navbar/Header'
import Banner from './components/banner/Banner'
import Footer from './components/Footer/Footer'
import Category from './components/Category/Category'
import Video from './components/Video/Video'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Banner/>
      <Video/>
      <Category/>
      <Footer/>
    </div>

  )           
}

export default App