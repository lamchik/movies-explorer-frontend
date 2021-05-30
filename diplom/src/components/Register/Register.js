import logo from "../../images/logo-header.svg"
import { Link} from 'react-router-dom';
import "../Register/Register.css"
import "../../fonts/inter-3.13/inter-web/inter.css"


function Register() {
    return(
        <div className="entrance">
            <div className="entrance__headline-wrap ">
                <div className="entrance__headline-logo">
                    <img className="entrance__headline-img" src={logo} alt="S"/>
                </div>
                <h2 className="entrance__headline">Добро пожаловать!</h2>
            </div>
            <form className="entrance__form-wrap">
                <div className="entrance__form">
                    <p className="entrance__form-headline">Имя</p>
                    <input className="input" type="text" placeholder="Иван" required/>
                    <hr className="entrance__form-line"/>
                </div>
                <div className="entrance__form">
                    <p className="entrance__form-headline">E-mail</p>
                    <input className="input" type="email" placeholder="ivan@ivan.ru" required/>
                    <hr className="entrance__form-line"/>
                </div>
                <div className="entrance__form">
                    <p className="entrance__form-headline">Пароль</p>
                    <input className="input" type="password" placeholder="введите пароль" required/>
                    <hr className="entrance__form-line"/>
                </div>
                <button className="entrance__button">Зарегистрироваться</button>
                <div className="entrance__login">
                    <p className="entrance__login-text">Уже зарегистрированы?</p>
                    <Link className="entrance__login-link" to="/signin">Войти</Link>
                </div>
            </form>
        </div>
    )
}

export default Register