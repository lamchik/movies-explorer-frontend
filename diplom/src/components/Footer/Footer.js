import "../Footer/Footer.css"

function Footer(){
    return(
        <div className="footer">
            <p className="footer__descriptopn">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <hr className="footer__line portfolio__line"></hr>
            <div className="footer__social-year-wrap">
                <p className="footer__social-year-text">© 2020</p>
                <div className="footer__social-wrap">
                    <a className="footer__social-year-text" href="https://praktikum.yandex.ru/profile/web/" target="blank">Яндекс.Практикум</a>
                    <a className="footer__social-year-text" href="https://github.com/lamchik" target="blank">Github</a>
                    <a className="footer__social-year-text" href="https://www.facebook.com/lamara.lanchava/" target="blank">Facebook</a>
                </div>
            </div>

        </div>
    )
}

export default Footer