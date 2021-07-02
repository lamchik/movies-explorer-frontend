import logo from '../../images/logo-header.svg';
import '../ProfileHeader/ProfileHeader.css';
import '../../fonts/inter-3.13/inter-web/inter.css';
import { Link, NavLink } from 'react-router-dom';
import icon from '../../images/account.svg';
import menu from '../../images/burger.svg';
import { useState } from 'react';

function ProfileHeader(props) {
  const [openBurgerMenu, setOpenMenu] = useState(false);

  function openMenu() {
    setOpenMenu(true);
  }

  function closeMenu() {
    setOpenMenu(false);
  }

  const buttonClassName = `burger-menu ${openBurgerMenu ? 'burger-menu_active' : 'burger-menu_invisible'}`;

  return (
    <div className="header-profile">
      <div className="header-profile__logo">
        <Link to="/">
          <div className="header-profile__logo header__logo">
            <img className="header-profile__logo-img header__logo-img" src={logo} alt="S" />
          </div>
        </Link>
        <div className="header-profile__link">
          <NavLink className="header-profile__link-text" to="/movies" activeClassName="nav__link_active">
            Фильмы
          </NavLink>
          <NavLink className="header-profile__link-text" to="/saved-movies" activeClassName="nav__link_active">
            Сохранённые фильмы
          </NavLink>
        </div>
      </div>
      <div className="header-profile__user">
        <Link className="header-profile__user-text" to="/profile">
          Аккаунт
        </Link>
        <div className="header-profile__user-icon">
          <img className="header-profile__user-icon-img" src={icon} alt="иконка" />
        </div>
      </div>
      <button className="header-profile__button" onClick={openMenu}>
        <img className="header-profile__button-img" src={menu} alt="меню" />
      </button>

      <div className={`"burger-menu" ${buttonClassName}`}>
        <div className="burger-menu__nav">
          <NavLink className="burger-menu__nav-text header-profile__link-text" to="/">
            Главная
          </NavLink>
          <NavLink
            className="burger-menu__nav-text header-profile__link-text"
            to="/movies"
            activeClassName="nav__link_active"
          >
            Фильмы
          </NavLink>
          <NavLink
            className="burger-menu__nav-text header-profile__link-text"
            to="/saved-movies"
            activeClassName="nav__link_active"
            onClick={props.saveMovie}
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <div className="burger-menu__nav-profile-wrap">
          <Link className="burger-menu__nav-profile header-profile__user-text" to="/profile">
            Аккаунт
          </Link>
          <div className="burger-menu__nav-profile-icon header-profile__user-icon">
            <img className="burger-menu__nav-profile-icon-img header-profile__user-icon-img" src={icon} alt="иконка" />
          </div>
        </div>
        <button className="burger-menu__close" onClick={closeMenu}></button>
      </div>
    </div>
  );
}

export default ProfileHeader;
