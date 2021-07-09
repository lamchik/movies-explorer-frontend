import { Link, Redirect, withRouter } from 'react-router-dom';
import "../Register/Register.css"
import "../../fonts/inter-3.13/inter-web/inter.css"
import logo from "../../images/logo-header.svg"
import "../Register/Register.css"
import "../../fonts/inter-3.13/inter-web/inter.css"
import React, { useState } from 'react';
import { useFormWithValidation } from "../../ValidationForm/ValidationForm.js"

function Login(props) {
    const form = useFormWithValidation()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onLogin(form.values["email"], form.values["password"])
    }

    const addClass = (
        `${form.isValid ? 'entrance__button_enabled': 'entrance__button_disabled'}`
    )
    

    if (props.isLoggedIn) {
        return <Redirect to="/movies" />
    }

    return(
        <div className="entrance">
            <div className="entrance__form-wrap">
                <div className="entrance__headline-wrap ">
                    <Link to="/">
                        <div className="entrance__headline-logo">
                            <img className="entrance__headline-img" src={logo} alt="S"/>
                        </div>
                    </Link>
                    <h2 className="entrance__headline">Рады видеть!</h2>
                </div>
                <form className="entrance__form" onSubmit={handleSubmit}>
                    <div className="entrance__form-input">
                        <div className="entrance__input">
                            <p className="entrance__form-headline">E-mail</p>
                            <input className="input" type="email" placeholder="ivan@ivan.ru" required name="email" value={form.values["email"] || ""} onChange={form.handleChange}/>
                            <hr className="entrance__form-line"/>
                        </div>
                        <div className="entrance__input">
                            <p className="entrance__form-headline">Пароль</p>
                            <input className="input" type="password" name="password" placeholder="введите пароль" required minLength={7} maxLength={200} value={form.values["password"] || ""} onChange={form.handleChange}/>
                            <hr className="entrance__form-line"/>
                        </div>
                    </div>
                    <div className="entrance__form-button">
                        <p className={props.addError}>неправильный e-mail или пароль ¯\_(ツ)_/¯ </p>
                        <button className={addClass}>Войти</button>
                        <div className="entrance__login">
                            <p className="entrance__login-text">Ещё не зарегистрированы?</p>
                            <Link className="entrance__login-link" to="/signup">Регистрация</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login