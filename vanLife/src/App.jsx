/* eslint-disable react/no-unescaped-entities */
import './App.css'
import Navbar from './components/Navbar'
import BodyContent from './components/BodyContent'
import About from './components/About'
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<BodyContent />} />
    <Route path='/about' element={<About />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App




