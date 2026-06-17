import "./Header.css";
import logo from "../../assets/Logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({
  handleAddClick,
  weatherData,
  isMobileMenuOpened,
  toggleMobileMenu,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <nav className="header__content">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
        {isMobileMenuOpened ? (
          <button
            className="header__menu_close"
            type="button"
            onClick={toggleMobileMenu}
          />
        ) : (
          <button
            className="header__menu"
            type="button"
            onClick={toggleMobileMenu}
          />
        )}
        <div className="header__nav-container mobile-menu">
          <ToggleSwitch />
          <button
            onClick={handleAddClick}
            type="button"
            className="header__button"
          >
            + Add Clothes
          </button>

          <Link to="/profile" className="header__user-container">
            <p className="header__username">Marku Pacleb</p>
            <img src={avatar} alt="Avatar" className="header__avatar" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
