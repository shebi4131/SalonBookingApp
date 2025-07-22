import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className=" logo-text" to="/">Beauty Salon</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/booking">Book</Link></li>
            {/* <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li> */}
            <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
