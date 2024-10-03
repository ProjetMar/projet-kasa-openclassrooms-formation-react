//import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import LOGO from "../../assets/LOGO.jpg"
import "../../styles/Header/Header.css"
function Header() {
    return(
        <header className="header"> 
            <img src={LOGO} alt="logo de kasa"/>
            <nav className="header__nav">
                <ul className="header__menu">
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
                        Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Propos" className={({ isActive }) => (isActive ? 'active' : '')}>
                        A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header