
import "../../styles/Banner.css"
function Banner({description , classbanner}) {
    return (<div className={`banner ${classbanner}`}>
        <div className="banner__container">
            {description && <h1>Chez vous, partout et ailleurs</h1>}
        </div>
    </div>)
}

export default Banner