import "../../fonts/inter-3.13/inter-web/inter.css"
import "../Portfolio/Portfolio.css"

function Portfolio() {
    return(
        <div className="portfolio-wrap">
            <p className="portfolio__header">Портфолио</p>
            <div className="portfolio__name">
                <p className="portfolio__name-text">Статичный сайт</p>
                <a className="portfolio__link" href="https://lamchik.github.io/russian-travel/" target="blank">↗</a>
            </div>
            <hr className="portfolio__line"></hr>
            <div className="portfolio__name">
                <p className="portfolio__name-text">Адаптивный сайт</p>
                <a className="portfolio__link" href="https://lamchik.github.io/russian-travel/" target="blank">↗</a>
            </div>
            <hr className="portfolio__line"></hr>
            <div className="portfolio__name">
                <p className="portfolio__name-text">Одностраничное приложение</p>
                <a className="portfolio__link" href="https://lamchik.github.io/mesto/" target="blank">↗</a>
            </div>
        </div>
    )
}

export default Portfolio