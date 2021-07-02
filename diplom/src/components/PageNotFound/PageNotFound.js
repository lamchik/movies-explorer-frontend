import "../PageNotFound/PageNotFound.css"
import "../../fonts/inter-3.13/inter-web/inter.css"
import { useParams, useHistory } from 'react-router-dom'; 

function PageNotFound() {
    const history = useHistory(); 
    return(
        <div className="not-found">
            <div className="not-found__main">
                <h2 className="not-found__main-headline">404</h2>
                <p className="not-found__main-subtitle">Страница не найдена</p>
            </div>
            <div className="not-found__button entrance__login-link" onClick={() => history.goBack()}>Назад</div>
        </div>
    

    )
}

export default PageNotFound