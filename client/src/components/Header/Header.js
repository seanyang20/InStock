import "./Header.scss";
import logo from "../../assets/Logo/InStock-Logo_2x.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="header">
      <img src={logo} alt="Instock logo" className="header__logo" />
      <div className="header__buttons-container">
        <Link to="/warehouses">
          <button className="header__button">Warehouses</button>
        </Link>
        <Link to="inventories">
          <button className="header__button header__button--current">
            Inventory
          </button>
        </Link>
      </div>
    </section>
  );
}
