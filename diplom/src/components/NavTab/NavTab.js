import '../NavTab/NavTab.css'
import "../../fonts/inter-3.13/inter-web/inter.css"

function NavTab() {

    return (
        <div className="navigation">
            <p className="navigation__link"><a href="#project" className="navigation__link-text">О проекте</a></p>
            <p className="navigation__link"><a href="#tech" className="navigation__link-text">Технологии</a></p>
            <p className="navigation__link"><a href="#student" className="navigation__link-text">Студент</a></p>
        </div>
    )
}

export default NavTab