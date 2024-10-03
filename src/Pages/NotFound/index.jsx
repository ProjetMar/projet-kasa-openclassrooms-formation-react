import { Link } from "react-router-dom"
import "../../styles/NotFound/notFound.css"
function NotFound(){
    return(
    <div className="erreur">
        <h1 className="erreur__404">404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d’accueil</Link>
    </div>)
}
export default NotFound