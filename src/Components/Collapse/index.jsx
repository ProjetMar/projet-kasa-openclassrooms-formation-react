import React, { useState } from 'react';
import vector from "../../assets/Vector.png"
import"../../styles/Collapse/Collapse.css"
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
}
export default Collapse

