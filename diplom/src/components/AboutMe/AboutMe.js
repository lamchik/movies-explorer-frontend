import "../AboutMe/AboutMe.css"
import "../MainHeader/MainHeader.css"
import "../MainLine/MainLine.css"
import "../../fonts/inter-3.13/inter-web/inter.css"

function AboutMe() {
    return(
        <div className="aboutme">
            <h3 className="aboutme__header main-header"><a name="student"></a>Студент</h3>
            <hr className="aboume__line main-line"></hr>
            <div className="aboutme__main-wrap">
                <div className="aboutme__main">
                    <h4 className="aboutme__main-name">Ламара</h4>
                    <p className="aboutme__main-proffession">Фронтенд-разработчик, 26 лет</p>
                    <p className="aboutme__main-description">Я родилась и живу в Москве, закончила юридический факультет МГЮА. Я люблю играть на музыкальных инструментах, 
                    а ещё увлекаюсь бегом. Недавно начала кодить. С 2019 года работала в компании «Авито» в юр отделе. После того, как прошла курс по веб-разработке, 
                    начала самостоятельно заниматься программированием и ушла с постоянной работы.</p>
                    <div className="aboutme__main-social-wrap">
                        <a className="aboutme__social" href="https://www.facebook.com/lamara.lanchava/" target="blank">Facebook</a>
                        <a className="aboutme__social" href="https://github.com/lamchik" target="blank">Github</a>
                    </div>
                </div>
                <div className="aboutme__photo"></div>
            </div>
        </div>
        
    )
}

export default AboutMe