import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/navbar/Header'
import Banner from './components/banner/Banner'
import Footer from './components/Footer/Footer'
// import Category from './components/Category/Category'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Banner/>
      {/* <Category/> */}
      <Footer/>
     
    </div>

  )           
}

export default App