import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <div className="Header">
            <h1>Weather App</h1>

            <nav>
                <NavLink to="/home">Home</NavLink>
                <span> | </span>
                <NavLink to="/history">History</NavLink>
                <span> | </span>
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    );
}

export default Header;