import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux"
import styles from "./Create.module.css"
import { postPokemon } from "../../redux/actions";

const Create = (prop)=>{
    const dispatch = useDispatch();
    
    const [newPokemon, setNewPokemon] = useState({
        name: '',
        life: 0,
        stroke: 0,
        defending: 0,
        speed: 0,
        height: 0,
        weight: 0,
        imageDefault: '',
        type:[]
        
    })
    
    const handleChange = (e)=>{
        const{value, name} = e.target;
        console.log(value, name);
        setNewPokemon({...newPokemon, [name]:value})    
    }
    
    const handleType = (e)=>{     
        const {id} = e.target;
        if (newPokemon.type.length > 2) alert ('El Pokemon pueden ser solo dos Tipos')
        if (newPokemon.type.includes(id)){
            console.log("Ya tiene elemento");
            const filtered = newPokemon.type.filter(ty=> ty !== id)
            setNewPokemon({
                ...newPokemon,
                type: filtered
            })        
        }else{
            setNewPokemon({
                ...newPokemon,
                type:[...newPokemon.type, id]
            })
        } 
    }
    
    useEffect(()=>{
        console.log(newPokemon);
    },[newPokemon])
    
    const handleSubmit = (e)=>{        
        e.preventDefault()
        dispatch(postPokemon(newPokemon))
    }
   
    
    return(
    <div className={styles.divBody}>
        <form className={styles.containerForm} onSubmit={handleSubmit}>
             <div className={styles.inputDiv}>
            <h2>NOMBRE</h2>
                <input name='name' type="text" onChange={handleChange}/>                
            </div>
            <div className={styles.inputDiv}>
            <h2>ENERGIA</h2>
            <div className={styles.inputDiv2}>
                <input name='life' type="range" onChange={handleChange} min="0" max="200" />
                <p>{newPokemon.life}</p>
            </div>
            </div>
            <div className={styles.inputDiv}>
            <h2>ATAQUE</h2>
            <div className={styles.inputDiv2}>
                <input name='stroke' type="range" onChange={handleChange} min="0" max="200" />
                <p>{newPokemon.stroke}</p>
            </div>
            </div>
            <div className={styles.inputDiv}>
            <h2>DEFENSA</h2>
            <div className={styles.inputDiv2}>
                <input name='defending' type="range" onChange={handleChange} min="0" max="200" />
                <p>{newPokemon.defending}</p>
            </div>
            </div>
            <div className={styles.inputDiv}>
            <h2>VELOCIDAD</h2>
            <div className={styles.inputDiv2}>
                <input name='speed' type="range" onChange={handleChange} min="0" max="200" />
                <p>{newPokemon.speed}</p>
            </div>
            </div>
            <div className={styles.inputDiv}>
            <h2>ALTURA</h2>
            <div className={styles.inputDiv2}>
                <input name='height' type="range" onChange={handleChange} min="0" max="200" />
                <p>{newPokemon.height}</p>
            </div>
            </div>
            <div className={styles.inputDiv}>
            <h2>PESO</h2>
            <div className={styles.inputDiv2}>
                <input name='weight' type="range" onChange={handleChange} min="0" max="200" />
                <p>{newPokemon.weight}</p>
            </div>
            </div>
            <div className={styles.inputDiv}>
                <h2>IMAGEN</h2>
                <input name='imageDefault' type="text" onChange={handleChange}/>                
            </div>
                <h2>TIPOS</h2>
            <div className={styles.types}>                
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="normal" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="normal" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Normal</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="fighting" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="fighting" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Fighting</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="flying" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="flying" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Flying</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="poison" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="poison" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Poison</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="ground" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="ground" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Ground</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="rock" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="rock" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Rock</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="bug" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="bug" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Bug</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="ghost" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="ghost" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Ghost</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="steel" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="steel" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Steel</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="fire" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="fire" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Fire</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="water" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="water" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Water</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="grass" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="grass" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Grass</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="electric" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="electric" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Electric</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="psychic" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="psychic" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Psychic</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="ice" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="ice" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Ice</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="dragon" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="dragon" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Dragon</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="dark" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="dark" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Dark</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="fairy" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="fairy" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Fairy</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="unknown" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="unknown" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Unknown</div>
                        </div>
                    </label>
                </div>
                <div className={styles.checkBoxHolder}>
                    <input type="checkbox" id="shadow" className={styles.checkBoxInput} onChange={handleType}/>
                    <label htmlFor="shadow" className={styles.checkBoxWrapper}>
                        <div className={styles.checkBox}>
                            <div className={styles.inner}>Shadow</div>
                        </div>
                    </label>
                </div>
            </div>
            <button type="submit">Agregar</button>
        </form>
    </div>
    )
}

export default Create