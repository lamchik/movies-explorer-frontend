import "../../fonts/inter-3.13/inter-web/inter.css"
import "../ButtonElse/ButtonElse.css"

function ButtonMore({handleClick, show}) {
  return (
    <div className={`button-else ${show ? '' :'button-else_invisible' }`}>
      <button className="button-else__button" onClick={handleClick}>
        <p className="button-else__text">Ещё</p>
      </button>
    </div>
  )
}

export default ButtonMore