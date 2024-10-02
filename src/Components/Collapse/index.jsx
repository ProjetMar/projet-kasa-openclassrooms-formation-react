import React, { useState } from 'react';
import vector from "../../assets/Vector.png"
import"../../styles/Collapse.css"
function Collapse({isMarginZero,name,description}){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`collapse ${isMarginZero ? 'collapse--noMargin':''}`}>
          <div className='collapse__open'>
            <p>{name}</p>
            <button  className={`${isOpen ? 'rotate' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <img 
              src={vector} alt="bouton ouverture" />
            </button>
          </div>
          {isOpen && (
            <div className='collapse__text'>
              <p>{description}</p>
            </div>
          )}
        </div>
      );
    
    // return isOpen ? (
    //     <div className="collapse">
    //         <div className='collapse__open'>
    //             <p>titre</p>
    //             <button className='collapse__open--modif' onClick={() => setIsOpen(false)}><img src={vector} alt="buttom ouverture"/></button>
    //         </div>
    //         <div className='collapse__text'>
    //             <p>le text est ici</p>
    //         </div>
    //     </div>
    // ):(

    //     <div className="collapse">
    //         <div className='collapse__open'>
    //             <p>titre</p>
    //             <button className='collapse__open--modif1' onClick={() => setIsOpen(true)}><img src={vectorC} alt="buttom ouverture"/></button>
    //         </div>
    //     </div>
    // )
}
export default Collapse

