import { useParams } from "react-router-dom";
import data from '../../data.json'
import Carrousel from "../../Components/Carrousel";
import Collapse from "../../Components/Collapse";
import "../../styles/Logement/logement.css"
import "../../styles/Collapse/Collapse.css"
import NotFound from "../NotFound";
import Etoile from "../../Components/Etoile";
function Logement(){
    const {id} = useParams()
    console.log(id)
    const logement = data.find(item => item.id === id);
    if(logement=== undefined){
        return(<NotFound/>)
    }else{
        const nbrEtoile = parseInt(logement.rating);
        return(<>
            <Carrousel pictures = {logement.pictures} title = {logement.title}/>
            <div className="information">
                <div className="information__sectionOne">
                    <div>
                        <h1>{logement.title}</h1>
                        <p>{`${logement.location.split(" - ")[1].split(" ")[0]}, île-de-france`}</p>
                    </div>
                    <ul>
                        {logement.tags.map((tag)=>(
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="information__sectionTwo">
                    <div className="information__sectionTwo__host">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt={logement.host.name}/>
                    </div>
                    <div className="information__sectionTwo__stars">
                        <Etoile nbrEtoile={nbrEtoile}/>
                    </div>  
                </div>   
            </div>
            <div className="informationTwo">
                <Collapse
                    key={logement.name + "1"}
                    isMarginZero={true}
                    name="Description"
                    description={logement.description}
                />
                <Collapse
                    key={logement.name + "2"}
                    isMarginZero={true}
                    name="Equipments"
                    description={<ul>
                        {logement.equipments.map((equ) => (
                        <li key={equ}>{equ}</li>
                    ))}
                    </ul>}
                />
            </div>
            </>
            
        )
    }

}
export default Logement