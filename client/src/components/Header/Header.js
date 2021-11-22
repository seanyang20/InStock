import "./Header.scss";
import logo from "../../assets/logo/InStock-Logo_2x.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <section className="header">
      <nav className="header__nav">
        <img src={logo} alt="Instock logo" className="header__logo" />
        <div className="header__buttons-container">
          <Link to="/warehouses">
            <button
              className={`header__button ${
                location.pathname.startsWith("/warehouses") &&
                "header__button--current"
              }`}
            >
              Warehouses
            </button>
          </Link>
          <Link to="/inventories">
            <button
              className={`header__button ${
                location.pathname.startsWith("/inventories") &&
                "header__button--current"
              }`}
            >
              Inventory
            </button>
          </Link>
        </div>
      </nav>
    </section>
  );
}
