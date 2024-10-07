import etoileR from "../../assets/etoileR.png";
import etoileG from "../../assets/etoileG.png";
function Etoile({nbrEtoile}){
    const totalEtoiles = 5;
  const tabEtoile = Array.from({ length: nbrEtoile }, (_, i) => i + 1); //_ car le valeur dans le tb generer est undefined _ pour l'ingorer
  const tabEtoileRest = Array.from({ length: totalEtoiles - nbrEtoile }, (_, i) => i + 1); 
    return(<>
            {tabEtoile.map((nbr) => (
                <img key={nbr} src={etoileR} alt="étoile rose" />
            ))}
            {tabEtoileRest.map((nbr) => (
                <img key={nbr} src={etoileG} alt="étoile grise" />
            ))}
        </>
    )
}
export default Etoile