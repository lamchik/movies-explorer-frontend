import "../../fonts/inter-3.13/inter-web/inter.css";
import '../SavedMovies/SavedMovies.css';
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";



function SavedMovies (props) {
    return (
        <div className="saved-movie">
            <ProfileHeader></ProfileHeader>
            <SearchForm></SearchForm>
            <Preloader></Preloader>
            <MoviesCardList
                page = 'saved-movies'
            ></MoviesCardList>
            <Footer></Footer>
        </div>

    )
}

export default SavedMovies;