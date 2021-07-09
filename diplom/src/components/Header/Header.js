import { Link} from 'react-router-dom';
import logo from "../../images/logo-header.svg"
import "../Header/Header.css"
import "../../fonts/inter-3.13/inter-web/inter.css"
import { Route } from 'react-router-dom'


function Header () {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-img" src={logo} alt="S" />
            </div>
            <div className="header__auth">
                <Link to="/signup" className="header__auth-sign-up">Регистрация</Link>
                <button className="header__auth-sign-in-button">
                    <Link to="/signin" className="header__auth-sign-in">Войти</Link>
                </button>
                
            </div>
        </header>
        
    )
}

export default Header;
