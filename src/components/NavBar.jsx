import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/category/merch">Merch</Link>
      <Link to="/category/albums">Albums</Link>
      <Link to="/category/contact">Contact</Link>
    </nav>
  )
}

export default NavBar