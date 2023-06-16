import React, { useState } from "react";
import Styles from './TypeBar.module.css'
import imgON from '../img/pokeballOpen.png'
import imgOFF from '../img/pokeballClose.png'

const TypeBar = (props)=>{
    const [isChecked, setIsChecked] = useState(false)
    const [type, setType] = useState("");
    
    const handlerType = (e)=>{
                
        setIsChecked(!isChecked)
        setType(e.target.name)
    };
    
    return( 
    <div className={Styles.barLeft}>               
        <div>
            {isChecked ? (<img onClick={handlerType} type='button' src={imgON} alt="" />) : (<img onClick={handlerType} type='button' src={imgOFF} alt="" />)}
        </div>       
    </div>
    );

}

export default TypeBar;