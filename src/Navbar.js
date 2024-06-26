   import { NavLink } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            
            <li>
              <NavLink to="jewlery">Jewlery</NavLink>
            </li>
            <li>
              <NavLink to="electronic">Electronic</NavLink>
            </li>
            <li>
              <NavLink to="manclothing">Manclothing</NavLink>
            </li>
            <li>
              <NavLink to="womenclothing">Womenclothing</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar