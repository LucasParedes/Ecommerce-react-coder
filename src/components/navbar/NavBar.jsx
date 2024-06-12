import { CartWidget } from "../cartWidget/CartWidget";
import "./navBar.css";

export const NavBar = () => {
  return (
    <header className="header">
      <div className="logoCompany">
        <img src="/logo.png" alt="Logo Company" />
      </div>
      <nav className="nav-container">
        <ul className="nav-links">
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Sucursales</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};
