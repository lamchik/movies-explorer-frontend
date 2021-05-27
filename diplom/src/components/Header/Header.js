import { NavLink } from 'react-router-dom';

function Header () {
    return (
        <nav className="">
            <NavLink to="/"activeClassName="menu__link_active" className="header__link">ЛОГО</NavLink>
            <NavLink to="/movies" activeClassName="menu__link_active" className="">Фильмы</NavLink>
            <NavLink to="/saved-movies" activeClassName="menu__link_active" className="">Сохраненные фильмы</NavLink>
            <NavLink to="/profile" activeClassName="menu__link_active" className="">Аккаунт</NavLink>
        </nav>
    )
}

export default Header;
