import React, { useEffect } from 'react'
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import "../Movies/Movies.css"
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import ButtonElse from "../ButtonElse/ButtonElse";
import "../ProfileHeader/ProfileHeader.css"
import MoviesApi from "../../utils/MoviesApi"
import { useState } from 'react'




function Movie(props) {
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([])
    // const filteredMovies = props.movies.filter(item => item.nameRU.includes(query))

    function setMovieInLocalStorage() {
        if(localStorage.getItem('movies') === null) {
            const filteredMovies = props.movies.filter(item => item.nameRU.includes(query))
            localStorage.setItem('movies', JSON.stringify(filteredMovies));
        }

       else {
           const localMovies = JSON.parse(localStorage.getItem('movies'))
           setMovies(localMovies)
       } 
    }

    useEffect(() => {
        setMovieInLocalStorage()
    }, [])
    
    useEffect(() => {
        if (props.movies.length > 0) {
            const filteredMovies = props.movies.filter(item => item.nameRU.includes(query))
            console.log("setting to LS", filteredMovies, props.movies)
            localStorage.setItem('movies', JSON.stringify(filteredMovies))
            setMovies(filteredMovies)
        }
    }, [props])

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
      }
    
    const onSubmit = e => {
        e.preventDefault();
        props.onGetMovies()
        setQuery(search);
    }

    // useEffect(() => {
    //     props.onGetMovies()
    // }, [])
    
    return(
        <div className="movie">
            <ProfileHeader></ProfileHeader>
            <SearchForm
                onSubmit={onSubmit}
                onChange={updateSearch}
                searchValue={search}
            ></SearchForm>
            <Preloader></Preloader>
            <MoviesCardList
                page='movies'
                filteredMovies={movies}
                search={search}
            ></MoviesCardList>
            <ButtonElse></ButtonElse>
            <Footer></Footer>
        </div>

    )
}
export default Movie
