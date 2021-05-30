import logo from "../../images/logo-header.svg"
import "../ProfileHeader/ProfileHeader.css"
import "../../fonts/inter-3.13/inter-web/inter.css"
import { Link} from 'react-router-dom';
import icon from "../../images/account.svg"


function ProfileHeader () {

    return (
        <div className="header-profile">
            <div className="header-profile__logo">
                <div className="header-profile__logo header__logo">
                    <img className="header-profile__logo-img header__logo-img" src={logo} alt="S" />
                </div>
                <div className="header-profile__link">
                    <Link className="header-profile__link-text" to="/movies">Фильмы</Link>
                    <Link className="header-profile__link-text" to="/saved-movies">Сохранённые фильмы</Link>
                </div>
            </div>
            <div className="header-profile__user">
                <p className="header-profile__user-text">Аккаунт</p>
                <div className="header-profile__user-icon">
                    <img className="header-profile__user-icon-img" src={icon} alt="иконка"/>
                </div>
            </div>

        </div>
    )
}

export default ProfileHeader