import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

function NavBar() {
  return (
    <nav className="navbar">
      <link to='/'>
        <img src={logo} alt="logo" style={{height: '40px'}}/>
      </link>
      <Link to="/">Home</Link>
      <Link to="/category/merch">Merch</Link>
      <Link to="/category/albums">Albums</Link>
      <Link to="/category/contact">Contact</Link>
    </nav>
  )
}

export default NavBar