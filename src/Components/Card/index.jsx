import { Link } from "react-router-dom"
import "../../styles/card.css"
function Card({ title, cover, id }) {
    return (
      <Link className="card" to={`pages/Logement/${id}`}> 
          <img className="card__image" src={cover} alt="appartement" />
          <h2 className="card__title">{title}</h2>
      </Link>
    )
  }
  export default Card