import { Link } from "react-router-dom"

const Navbar = () => {
    return (
      <nav className="navbar">
        <h2>#VANLIFE</h2>
        <ul >
          <li><Link to="/Vans">Vans</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    )
  }

export default Navbar 