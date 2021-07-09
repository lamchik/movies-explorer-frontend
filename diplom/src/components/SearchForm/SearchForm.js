import search from "../../images/search-icon.svg"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import "../SearchForm/SearchForm.css"
import "../../fonts/inter-3.13/inter-web/inter.css"
import whiteSearchIcon from "../../images/icon-search-white.svg"
import { useState } from "react";



function SearchForm({onSubmit, searchValue, onChange, changeValue, value}) {
  
    return(
        <div className="search">
            <form className="search__form" onSubmit={onSubmit}>
                <div className="search__form-line-wrap">
                    <div className="search__form-line">
                        <img className="search__form-line-img" src={search} alt="лупа"/>
                        <input className="search__form-input input" type="text" placeholder="Фильм" required value={searchValue} onChange={onChange}/>
                    </div>
                    <button className="search__form-img-wrap" >
                        <img className="search__form-img" src={whiteSearchIcon} alt="лупа"/>
                    </button>
                </div>
                <div className="search__form-checkbox-wrap">
                    <FilterCheckbox
                      changeValue={changeValue}
                      value={value}
                    />
                    <p className="search__form-checkbox-text">Короткометражки</p>
                </div>
            </form>
            <hr className="portfolio__line"></hr>
        </div>
    )
}

export default SearchForm