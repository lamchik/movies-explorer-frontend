import { NavLink } from 'react-router-dom';
import logo from "../../images/logo-header.svg"
import "../Header/Header.css"
import "../../fonts/inter-3.13/inter-web/inter.css"

function Header () {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-img" src={logo} alt="S" />
            </div>
            <div className="header__auth">
                <p className="header__auth-sign-up">Регистрация</p>
                <p className="header__auth-sign-in">Войти</p>
            </div>
        </header>
        
        // <nav className="">
        //     <NavLink to="/"activeClassName="menu__link_active" className="header__link">ЛОГО</NavLink>
        //     <NavLink to="/movies" activeClassName="menu__link_active" className="">Фильмы</NavLink>
        //     <NavLink to="/saved-movies" activeClassName="menu__link_active" className="">Сохраненные фильмы</NavLink>
        //     <NavLink to="/profile" activeClassName="menu__link_active" className="">Аккаунт</NavLink>
        // </nav>
    )
}

export default Header;
