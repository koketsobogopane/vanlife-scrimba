/* eslint-disable react/no-unescaped-entities */
import './App.css'
import Navbar from './components/Navbar'
import BodyContent from './components/BodyContent'
import About from './components/About'
import Footer from "./components/Footer"
import VanDetails from "./components/Footer"
import VansList from './components/VansLIst'
import { Route, Routes } from "react-router-dom"

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<BodyContent />} />
    <Route path='/about' element={<About />} />
    <Route  path="/vans" element={<VansList />}/>
    <Route path='/vans/:id' element={<VanDetails />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App




