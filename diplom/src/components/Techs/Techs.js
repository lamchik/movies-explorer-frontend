import "../Techs/Techs.css"
import "../MainHeader/MainHeader.css"
import "../MainLine/MainLine.css"
import "../../fonts/inter-3.13/inter-web/inter.css"

function Tech() {
    return(
        <div className="tech">
            <h3 className="tech__header main-header"><a name="tech"></a>Технологии</h3>
            <hr className="tech__line main-line"></hr>
            <div className="tech__description-wrap">
                <h2 className="tech__count">7 технологий</h2>
                <p className="tech__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <div className="tech__name-wrap">
                <div className="tech__name">
                    <p className="tech__name-text">HTML</p>
                </div>
                <div className="tech__name">
                    <p className="tech__name-text">CSS</p>
                </div>
                <div className="tech__name">
                    <p className="tech__name-text">JS</p>
                </div>
                <div className="tech__name">
                    <p className="tech__name-text">React</p>
                </div>
                <div className="tech__name">
                    <p className="tech__name-text">Git</p>
                </div>
                <div className="tech__name">
                    <p className="tech__name-text">Express.js</p>
                </div>
                <div className="tech__name">
                    <p className="tech__name-text">mongoDB</p>
                </div>
            </div>
           
        </div>
        
    )
}

export default Tech