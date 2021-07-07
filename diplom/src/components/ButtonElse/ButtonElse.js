import "../../fonts/inter-3.13/inter-web/inter.css"
import "../ButtonElse/ButtonElse.css"

function ButtonElse({handleClick, filteredMovies, buttonElse}) {
  function  onClick() {
    handleClick(filteredMovies)
  }

 const isButtonElseVisible = (
   `${buttonElse ? '' : 'button-else_invisible'}`
 )

    return( 
        <div className={`button-else ${isButtonElseVisible}`}>
            <button className="button-else__button" onClick={onClick}>
                <p className="button-else__text">Ещё</p>
            </button>
        </div>
    )
}

export default ButtonElse