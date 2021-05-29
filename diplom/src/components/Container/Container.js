import "../Container/Container.css"
import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"

function Container() {
    return (
        <div className="container">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}

export default Container;
