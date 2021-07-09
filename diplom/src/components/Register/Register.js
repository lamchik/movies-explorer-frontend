import logo from "../../images/logo-header.svg"
import { Link, withRouter, Redirect} from 'react-router-dom';
import { Route } from 'react-router-dom'
import Container from '../Container/Container';
import "../Register/Register.css"
import "../../fonts/inter-3.13/inter-web/inter.css"
import { useFormWithValidation } from "../../ValidationForm/ValidationForm.js"
import { useForm } from "../../ValidationForm/ValidationForm"
import React, { useState } from 'react';

function Register(props) {
    const form = useFormWithValidation()
    const addClass = (
        `${form.isValid ? 'entrance__button_enabled': 'entrance__button_disabled'}`
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onRegister(form.values["email"], form.values["password"], form.values["name"]).then(() => {
            props.onLogin(form.values["email"], form.values["password"])
        })
    }

    if (props.isLoggedIn) {
        return <Redirect to="/movies" />
    }

    return(
        <div className="entrance">
            <div className="entrance__form-wrap">
                <div className="entrance__headline-wrap">
                    <Link to="/">
                        <div className="entrance__headline-logo">
                            <img className="entrance__headline-img" src={logo} alt="S"/>
                        </div>
                    </Link>
                    <h2 className="entrance__headline">Добро пожаловать!</h2>
                </div>
                <form className="entrance__form" autoComplete="off" onSubmit={handleSubmit}>
                    <div className="entrance__form-input">
                        <div className="entrance__input">
                            <p className="entrance__form-headline">Имя</p>
                            <input className="input input__name" type="text" pattern="^[A-zА-яё -]+$" placeholder="Иван" name="name" required maxLength={200} value={form.values["name"] || ""} onChange={form.handleChange}/>
                            <hr className="entrance__form-line"/>
                        </div>
                        <div className="entrance__input">
                            <p className="entrance__form-headline">E-mail</p>
                            <input className="input input__email" type="email" placeholder="ivan@ivan.ru" name="email" required value={form.values["email"] || ""} onChange={form.handleChange}/>
                            <hr className="entrance__form-line"/>
                        </div>
                        <div className="entrance__input">
                            <p className="entrance__form-headline">Пароль</p>
                            <input className="input input__password" type="password" placeholder="введите пароль" name="password" required minLength={8} maxLength={200} value={form.values["password"] || ""} onChange={form.handleChange}/>
                            <hr className="entrance__form-line"/>
                        </div>
                    </div>
                    <div className="entrance__form-button">
                        <p className={props.addError}>что-то пошло не так ¯\_(ツ)_/¯ </p>
                        <button className={addClass}>Зарегистрироваться</button>
                        <div className="entrance__login">
                            <p className="entrance__login-text">Уже зарегистрированы?</p>
                            <Link className="entrance__login-link" to="/signin">Войти</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default withRouter(Register)