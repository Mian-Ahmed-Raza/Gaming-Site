import { Link } from 'react-router-dom';
import logo from '../assets/logo4.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar-custom">
      <Link to="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>
      <div className="nav-links-container">
        <ul className="nav-links-list">
          <li><Link to="/" className="nav-link">HOME</Link></li>
          <li><Link to="/about" className="nav-link">ABOUT</Link></li>
          <li><Link to="/courses" className="nav-link">COURSES</Link></li>
          <li><Link to="/blog" className="nav-link">BLOG</Link></li>
          <li><Link to="/contact" className="nav-link">CONTACT</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
