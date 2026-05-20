import { useState } from 'react'
import './App.css'
import Header from './components/layouts/Header'
import Home from './pages/Home'
import Footer from './components/layouts/Footer'
import { Link } from 'lucide-react'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App
