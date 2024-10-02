import etoileR from "../../assets/etoileR.png";
import etoileG from "../../assets/etoileG.png";
function Etoile({nbrEtoile}){
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
        {tabEtoile.map((nbr) => (
            <img
                key={nbr}
                src={etoileR}
                alt="etoilerose"
            />
            ))} 
            {notTotale && (tabEtoileRest.map((key)=>(<img key={key} src={etoileG} alt="etoileGrise"/>)))} 
        </>
    )
}
export default Etoile