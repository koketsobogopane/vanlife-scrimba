import './App.css'
import { Link } from "react-router-dom"

function App() {
  

  return (
    <>
    <Navbar/>
    </>
  )
}

export default App



const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>#VANLIFE</h2>
      <ul >
        <li><a href="/Vans">Vans</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  )
}