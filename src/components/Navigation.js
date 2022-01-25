import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "../img/logoipsum-logo-44.svg";

const Navigation = () => (
  <div className="nav">
    <img className="logo" alt="logo" src={logo} />
    <div className="nav-menu">
      <NavLink to="/" style={{color: '#fff'}}>Home</NavLink>
      <NavLink to="/about-us" style={{color: '#fff'}}>About</NavLink>
      <NavLink to="/contact" style={{color: '#fff'}}>Contact</NavLink>
    </div>
  </div>
);

export default Navigation;
