import landing from "../../images/landing-logo.svg"
import "../Promo/Promo.css"
import "../../fonts/inter-3.13/inter-web/inter.css"


function Promo () {
    return (
        <div className="promo">
            <h1 className="promo__text">Учебный проект студента факультета Веб-разработки.</h1>
            <img className="promo__logo" src={landing} alt="логотип Практикума"/>
        </div>
        


    )
}

export default Promo