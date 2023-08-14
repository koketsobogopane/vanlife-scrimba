import { Link } from "react-router-dom"

const Navbar = () => {
    return (
      <nav className="navbar">
        <h2><Link 
                style={{
                    textDecoration: 'none',
                    color: 'black',
                    }}
                to={"/"}

        >#VANLIFE</Link></h2>
        <ul >
          <li><Link to="/vans">Vans</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    )
  }

export default Navbar 