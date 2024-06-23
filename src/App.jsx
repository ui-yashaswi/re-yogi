import React from 'react'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Places from './pages/Places'
import Featured from './pages/Featured'
import Iconcard from './pages/Iconcard'
import Agents from './pages/Agents'
import Client from './pages/Client'
import Partners from './pages/Partners'
import Footer from './pages/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Places />
      <Featured />
      <Iconcard />
      <Agents />
      <Partners />
      <Client />
      <Footer/>
    </div>
  );
}

export default App
