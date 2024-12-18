import { Link, NavLink } from "react-router-dom";
import "./Header.css"

const Header  = () => {
    return ( 
        <header>
            <div className="logo-con">
                <Link to="/">
                    <img src="/img/Logo.png" alt="Logo" />
                </Link>
            </div>

            <div className="nav-con">
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/categories">Products</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;