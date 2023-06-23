import React, { useState } from "react";
import Styles from './TypeBar.module.css'
import { useDispatch } from "react-redux";
import { filterTypePok } from "../../redux/actions";


const TypeBar = (props)=>{
    const dispatch = useDispatch()
    const [isChecked, setIsChecked] = useState(false)
    const [type, setType] = useState("");
    
    const handlerType = (e)=>{
        console.log(e.target.value.toLowerCase());
        dispatch(filterTypePok(e.target.value.toLowerCase()))
    };
    
    return( 
    <div>   
        <div action="" className={Styles.container}>
        <h3>Tipos de Pokemon</h3>
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="NORMAL" name="valueIs-radio"  value="NORMAL"/>
        <label className={Styles.neonBtn} htmlFor="NORMAL">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>NORMAL</span>
        </label>

        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="FIGHTING" name="valueIs-radio" value="FIGHTING"/>
        <label className={Styles.neonBtn} htmlFor="FIGHTING">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>FIGHTING</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="FLYING" name="valueIs-radio" value="FLYING"/>
        <label className={Styles.neonBtn} htmlFor="FLYING">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>FLYING</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="POISON" name="valueIs-radio" value="POISON"/>
        <label className={Styles.neonBtn} htmlFor="POISON">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>POISON</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="GROUND" name="valueIs-radio" value="GROUND"/>
        <label className={Styles.neonBtn} htmlFor="GROUND">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>GROUND</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="ROCK" name="valueIs-radio" value="ROCK"/>
        <label className={Styles.neonBtn} htmlFor="ROCK">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>ROCK</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="BUG" name="valueIs-radio" value="BUG"/>
        <label className={Styles.neonBtn} htmlFor="BUG">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>BUG</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="GHOST" name="valueIs-radio" value="GHOST"/>
        <label className={Styles.neonBtn} htmlFor="GHOST">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>GHOST</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="STEEL" name="valueIs-radio" value="STEEL"/>
        <label className={Styles.neonBtn} htmlFor="STEEL">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>STEEL</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="FIRE" name="valueIs-radio" value="FIRE"/>
        <label className={Styles.neonBtn} htmlFor="FIRE">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>FIRE</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="WATER" name="valueIs-radio" value="WATER"/>
        <label className={Styles.neonBtn} htmlFor="WATER">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>WATER</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="GRASS" name="valueIs-radio" value="GRASS"/>
        <label className={Styles.neonBtn} htmlFor="GRASS">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>GRASS</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="ELECTRIC" name="valueIs-radio" value="ELECTRIC"/>
        <label className={Styles.neonBtn} htmlFor="ELECTRIC">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>ELECTRIC</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="PSYCHIC" name="valueIs-radio" value="PSYCHIC"/>
        <label className={Styles.neonBtn} htmlFor="PSYCHIC">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>PSYCHIC</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="ICE" name="valueIs-radio" value="ICE"/>
        <label className={Styles.neonBtn} htmlFor="ICE">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>ICE</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="DRAGON" name="valueIs-radio" value="DRAGON"/>
        <label className={Styles.neonBtn} htmlFor="DRAGON">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>DRAGON</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="DARK" name="valueIs-radio" value="DARK"/>
        <label className={Styles.neonBtn} htmlFor="DARK">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>DARK</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="FAIRY" name="valueIs-radio" value="FAIRY"/>
        <label className={Styles.neonBtn} htmlFor="FAIRY">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>FAIRY</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="UNKNOWN" name="valueIs-radio" value="UNKNOWN"/>
        <label className={Styles.neonBtn} htmlFor="UNKNOWN">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>UNKNOWN</span>
        </label>
        
        <input className={Styles.inputBtn} onChange={handlerType} type="radio" id="SHADOW" name="valueIs-radio" value="SHADOW"/>
        <label className={Styles.neonBtn} htmlFor="SHADOW">
            <span className={Styles.span}></span>
            <span className={Styles.txt}>SHADOW</span>
        </label>
        </div>
        
    </div>
    );

}

export default TypeBar;