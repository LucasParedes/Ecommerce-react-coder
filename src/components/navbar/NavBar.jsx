import "./navBar.css";
import { CartWidget } from "../cartWidget/CartWidget";
import { Link, Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/logo.png" alt="Company Logo" className="logoCompany" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Todas</Link>
        <Link to="/categoria/auto">Autos</Link>
        <Link to="/categoria/camioneta">Camionetas</Link>
        <Link to="/categoria/moto">Motos</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
      <div className="navbar-cart">
        <CartWidget />
      </div>
      <div className="navbar-login">
        <Link to="/login">Login</Link>
      </div>
      <>
        <Outlet />
      </>
    </nav>
  );
};
