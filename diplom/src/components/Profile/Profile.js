import "../Profile/Profile.css"
import "../../fonts/inter-3.13/inter-web/inter.css"
import ProfileHeader from "../ProfileHeader/ProfileHeader"

function Profile() {
    return (
        <>
            <ProfileHeader></ProfileHeader>
            <div className="profile">
                <div className="profile__headline">Привет, Виталий!</div>
                <form className="profile__form">
                    <div className="profile__form-name">
                        <p className="profile__form-name-text">Имя</p>
                        <p className="profile__form-name-text">Виталий</p>
                    </div>
                    <hr className="profile__line entrance__form-line"></hr>
                    <div className="profile__form-name">
                        <p className="profile__form-name-text">E-mail</p>
                        <p className="profile__form-name-text">pochta@yandex.ru</p>
                    </div>
                </form>
                <div className="profile__button">
                    <button className="profile__button-edit">Редактировать</button>
                    <button className="profile__button-exit">Выйти из аккаунта</button>
                </div>
            </div>
        </>
    )
}

export default Profile