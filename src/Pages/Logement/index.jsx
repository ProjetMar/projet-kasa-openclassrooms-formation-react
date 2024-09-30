import { useParams } from "react-router-dom";
import data from '../../data.json'
import Carrousel from "../../Components/Carrousel";
import etoileR from "../../assets/etoileR.png";
import etoileG from "../../assets/etoileG.png";
import Collapse from "../../Components/Collapse";
import "../../styles/logement.css"
import "../../styles/Collapse.css"
function Logement(){
    const {id} = useParams()
    console.log(id)
    const logement = data.find(item => item.id === id);
    const nbrEtoile = parseInt(logement.rating);
    let tabEtoile = []
    for(let i=1; i<=nbrEtoile; i++){
        tabEtoile.push(i)
    }
    let notTotale = false;
    let tabEtoileRest = [];
    if(nbrEtoile < 5){
        notTotale = true;
        for(let i=1; i<=5-nbrEtoile; i++){
            tabEtoileRest.push(i)
        }
    }
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
                    {tabEtoile.map((nbr) => (
                    <img
                        key={nbr}
                        src={etoileR}
                        alt="etoilerose"
                    />
                    ))} 
                    {notTotale && (tabEtoileRest.map((key)=>(<img key={key} src={etoileG} alt="etoileGrise"/>)))} 
                </div>  
            </div>   
        </div>
        <div className="informationTwo">
            <Collapse
                key={logement.name + "1"}
                isLogement={true}
                name="Description"
                description={logement.description}
            />
            <Collapse
                key={logement.name + "2"}
                isLogement={true}
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
export default Logement