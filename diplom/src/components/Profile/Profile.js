import React, { useEffect, useState } from 'react'
import "../Profile/Profile.css"
import "../../fonts/inter-3.13/inter-web/inter.css"
import ProfileHeader from "../ProfileHeader/ProfileHeader"
import CurrentUserContext from "../../context/CurrentUserContext"
import { useFormWithValidation } from "../../ValidationForm/ValidationForm.js"
import MainApi from '../../utils/MainApi'



function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    // const form = useFormWithValidation()
    const form = useFormWithValidation({userName: "", email: ""})

    useEffect(() => {
        if(currentUser.name !== undefined) {  
            form.setValues({userName: currentUser.name, email: currentUser.email})
        }
      }, [currentUser])

    const addClass = (
      `${form.isValid ? 'profile__button-edit_enabled': 'profile__button-edit_disabled'}`
    )
    
    function handleEditProfile(e) {
        e.preventDefault();
        props.onUpdateUser({
            name: form.values.userName,
            email: form.values.email,
        });
    }

    return (
        <>
            <ProfileHeader/>
            <div className="profile">
                <div className="profile__headline-form">
                    <div className="profile__headline">Привет, {currentUser.name}!</div>
                    <form className="profile__form" onSubmit={handleEditProfile}>
                        <div className="profile__form-name-wrap">
                            <div className="profile__form-name">
                                <p className="profile__form-name-text">Имя</p>
                                <input className="profile__form-name-text profile__form-name-text-input" type="text" name="userName" required pattern="^[A-zА-яё -]+$" minLength={1} maxLength={200} value={form.values['userName']} onChange={form.handleChange}/>
                            </div>
                            <hr className="profile__line entrance__form-line"/>
                            <div className="profile__form-name">
                                <p className="profile__form-name-text">E-mail</p>
                                <input className="profile__form-name-text profile__form-name-text-input" type="email" name="email" required value={form.values['email']} onChange={form.handleChange}/>
                            </div>
                        </div>
                        <div className="profile__button">
                            <p className={`${props.message ? 'profile__message' : 'profile__message_invisible'}`}>{props.success ? "Данные обновлены!" : "Ой. Что-то пошло не так( Попробуйте ещё раз."}</p>
                            <button className={addClass}>Редактировать</button>
                            <button className="profile__button-exit" onClick={props.onSignOut}>Выйти из аккаунта</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Profile