import { Link } from "react-router-dom"
import "../../styles/Card/card.css"
function Card({ title, cover, id }) {
    return (
      <Link className="card" to={`pages/Logement/${id}`}> 
          <img className="card__image" src={cover} alt="appartement" />
          <p className="card__title">{title}</p>
      </Link>
    )
  }
  export default Card