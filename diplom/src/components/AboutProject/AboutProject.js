import "../AboutProject/AboutProject.css"
import "../MainHeader/MainHeader.css"
import "../MainLine/MainLine.css"
import "../../fonts/inter-3.13/inter-web/inter.css"

function AboutProject() {
    return (
        <div className="about-project">
            <div className="about-project__header-wrap">
                <h2 className="about-project__header main-header"><a name="project"></a>О проекте</h2>
                <hr className="about-project__line main-line"></hr>
                <div className="about-project__info-wrap">
                    <div className="about-project__info">
                        <div className="about-project__info-steps">
                            <h3 className="about-project__info-steps-header">Дипломный проект включал пять этапов</h3>
                            <p className="about-project__info-steps-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                        </div>
                        <div className="about-project__info-steps">
                            <h3 className="about-project__info-steps-header">На выполнение диплома ушло 5 недель</h3>
                            <p className="about-project__info-steps-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                        </div>
                    </div>
                </div>
                <div className="about-project__timeline-wrap">
                    <div className="about-project__timeline-backend-frontend">
                        <div className="about-project__timeline-backend">
                            <p className="about-project__timeline-backend-text">1 неделя</p>
                        </div>
                        <div className="about-project__timeline-frontend">
                            <p className="about-project__timeline-frontend-text">4 недели</p>
                        </div>
                    </div>
                    <div className="about-project__inscription">
                        <p className="about-project__inscription-backend about-project__inscription-backend-text">Back-end</p>
                        <p className="about-project__backend-frontend about-project__inscription-backend-text">Front-end</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutProject