import ProfileHeader from "../ProfileHeader/ProfileHeader";
import "../Movies/Movies.css"
import SearchForm from "../SearchForm/SearchForm";

function Movie() {
    return(
        <div className="movie">
            <ProfileHeader></ProfileHeader>
            <SearchForm></SearchForm>

        </div>

    )
}
export default Movie

// import { NavLink } from 'react-router-dom';

// function Movies () {
//     return (
//         <nav className="">
//             <NavLink to="/movies" activeClassName="menu__link_active" className="">Фильмы</NavLink>
//             <NavLink to="/saved-movies" activeClassName="menu__link_active" className="">Сохраненные фильмы</NavLink>
//       </nav>
//     )
// }

// export default Movies;