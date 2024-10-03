import { useState } from "react";
import prec from "../../assets/precedent.png"
import suivant from "../../assets/suivant.png"
import "../../styles/Carrousel/carrousel.css"
function Carrousel( {pictures, title}){
    const n=pictures.length; 
    const [count, setCount]=useState(0)
    return(<div className="Carrousel">
        <img className="Carrousel__picture" src={pictures[count]} alt={title}/>
        {(n>1)  &&(
            <>
            <button className="Carrousel__btnBefore" onClick={()=>`${(count === 0) ? setCount(n-1): setCount(count-1)}`}>
                <img src= {prec} alt="bouton precedent"/>
            </button>
            <button className="Carrousel__btnAfter"  onClick={()=>`${(count === n-1) ? setCount(0): setCount(count+1)}`}>
                <img src={suivant} alt="bouton suivant"/>
            </button>
            <p className="Carrousel__nbr">{`${count+1}/${n}`} </p>
            </>
        )}

    </div>)
}
export default Carrousel