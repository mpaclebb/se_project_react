import "./Header.css";
import logo from "../../assets/Logo.svg";
import avatar from "../../assets/avatar.png";

function Header({handleAddClick, weatherData}) {
  const currentDate = new Date().toLocaleString("default", {
    month:"long",
    day:"numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo" />
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}</p>
      <button 
      onClick={handleAddClick} 
       type="button" 
       className= "header__add-clothes-btn"
       id="navbar"
       >
        + Add Clothes
        </button>
      <div className="header__user-container">
        <p className="header__username">Terry Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
      
    </header>
  );
}

export default Header;
