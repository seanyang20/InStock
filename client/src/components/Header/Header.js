import "./Header.scss";
import logo from "../../assets/Logo/InStock-Logo_2x.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const handleClick = () => {
    console.log(location.pathname);
  };

  return (
    <section className="header">
      <nav className="header__nav">
        <img src={logo} alt="Instock logo" className="header__logo" />
        <div className="header__buttons-container">
          <Link to="/warehouses">
            <button
              onClick={handleClick}
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
              onClick={handleClick}
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
