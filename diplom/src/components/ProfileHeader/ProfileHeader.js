import logo from "../../images/logo-header.svg"
import "../ProfileHeader/ProfileHeader.css"
import "../../fonts/inter-3.13/inter-web/inter.css"
import { Link, NavLink } from 'react-router-dom';
import icon from "../../images/account.svg"
import { Route } from 'react-router-dom'
import Container from '../Container/Container';
import Movie from "../Movies/Movies";




function ProfileHeader () {

    return (
        <div className="header-profile">
            <div className="header-profile__logo">
                <Link to="/">
                    <div className="header-profile__logo header__logo">
                        <img className="header-profile__logo-img header__logo-img" src={logo} alt="S" />
                    </div>
                </Link>
                <div className="header-profile__link">
                    <NavLink className="header-profile__link-text" to="/movies" activeClassName="nav__link_active">Фильмы</NavLink>
                    <NavLink className="header-profile__link-text" to="/saved-movies"  activeClassName="nav__link_active">Сохранённые фильмы</NavLink>
                </div>
            </div>
            <div className="header-profile__user">
                <p className="header-profile__user-text">Аккаунт</p>
                <div className="header-profile__user-icon">
                    <img className="header-profile__user-icon-img" src={icon} alt="иконка"/>
                </div>
            </div>
            <Route exact path="/">
                <Container></Container>
            </Route>
            {/* <Route exact path="/movies">
                <Movie></Movie>
            </Route> */}
            <Route exact path="/saved-movies">
                <Container></Container>
            </Route>
        </div>
    )
}

export default ProfileHeader