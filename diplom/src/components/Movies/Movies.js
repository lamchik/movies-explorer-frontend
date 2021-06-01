import ProfileHeader from "../ProfileHeader/ProfileHeader";
import "../Movies/Movies.css"
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import ButtonElse from "../ButtonElse/ButtonElse";

function Movie() {
    return(
        <div className="movie">
            <ProfileHeader></ProfileHeader>
            <SearchForm></SearchForm>
            <Preloader></Preloader>
            <MoviesCardList></MoviesCardList>
            <ButtonElse></ButtonElse>
            <Footer></Footer>
        </div>

    )
}
export default Movie
