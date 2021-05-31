import "../FilterCheckbox/FilterCheckbox.css"

function FilterCheckbox() {
    return (
        <label className="switch">
            <input className="switch__checkbox" type="checkbox"/>
            <span className="slider"></span>
        </label>
        
    )
}

export default FilterCheckbox