import ProfileHeader from "../ProfileHeader/ProfileHeader";
import "../Movies/Movies.css"
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movie() {
    return(
        <div className="movie">
            <ProfileHeader></ProfileHeader>
            <SearchForm></SearchForm>
            <Preloader></Preloader>
            <MoviesCardList></MoviesCardList>
            <Footer></Footer>
        </div>

    )
}
export default Movie
