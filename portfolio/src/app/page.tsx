import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'

function page() {
  return (
    <div>
      <Header/>
      <Hero />
      <About/>
      <Contact/>
      <Footer/>
    
    </div>
  )
}

export default page
