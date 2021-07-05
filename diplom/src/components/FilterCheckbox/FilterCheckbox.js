import "../FilterCheckbox/FilterCheckbox.css"
import React, {useState} from 'react';


function FilterCheckbox({changeValue, value}) {


    return (
        <label className="switch">
            <input className="switch__checkbox" type="checkbox" value={value} onClick={changeValue}/>
            <span className="slider"></span>
        </label>
        
    )
}

export default FilterCheckbox