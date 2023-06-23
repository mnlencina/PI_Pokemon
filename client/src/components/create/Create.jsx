import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux"
import styles from "./Create.module.css"
import { addAllPokemon, postPokemon } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { validate } from "../validate/Validate";

const Create = (prop)=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
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
    const [errors, setErrors] = useState({
        name: '',
        life: '',
        stroke: '',
        defending: '',
        speed: '',
        height: '',
        weight: '',
        imageDefault: ''
    })
    
    const handleChange = (e)=>{
        const{value, name} = e.target;
        console.log(value, name);
        setNewPokemon({...newPokemon, [name]:value})
        setErrors(validate({...newPokemon, [name]:value}))
    }
    
    const handleType = (e)=>{
        console.log(e.target.id, e.target.checked, e.target.value);
        const {id} = e.target;
        const checkbox = document.getElementById(id)
        if (newPokemon.type.length >= 2 && checkbox.checked === true) {
            checkbox.checked = false
            return alert ('El Pokemon pueden ser solo dos Tipos')
        }else if(newPokemon.type.includes(id)){
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
        console.log('Actualizo Estados');
    },[newPokemon, errors])
       
    const handleSubmit = (e)=>{
        e.preventDefault()
        let errores = validate(newPokemon);
        console.log('verifico errores', errores);
        if(Object.keys(errores).length === 0 && (newPokemon.type).length !== 0){
            dispatch(postPokemon(newPokemon))
            dispatch(addAllPokemon())
            alert('CREADO CON EXITO')
            navigate('/home')
        }else if((newPokemon.type).length === 0){
            alert('Seleccionar al menos Un Tipo')
        }else{
            alert('Faltan DATOS')
        }
    }
   
    
    return(
    <div className={styles.divBody}>
        <form className={styles.containerForm} onSubmit={handleSubmit}>
             <div className={styles.inputDiv}>
            <h2><span>NOMBRE</span></h2>
                <input name='name' type="text" onChange={handleChange}/>                
            </div>
            {errors.name ? <p className={styles.errors}>{errors.name}</p> : null}
            <div className={styles.inputDiv}>
            <h2><span>ENERGIA</span></h2>
            <div className={styles.inputDiv2}>
                <input name='life' type="range" onChange={handleChange} min="0" max="200" />
                <p>{newPokemon.life}</p>
            </div>
            </div>
            {errors.life ? <p className={styles.errors}>{errors.life}</p> : null}
            <div className={styles.inputDiv}>
            <h2><span>ATAQUE</span></h2>
            <div className={styles.inputDiv2}>
                <input name='stroke' type="range" onChange={handleChange} min="0" max="200" />
                <p>{newPokemon.stroke}</p>
            </div>
            </div>
            {errors.stroke ? <p className={styles.errors}>{errors.stroke}</p> : null}
            <div className={styles.inputDiv}>
            <h2><span>DEFENSA</span></h2>
            <div className={styles.inputDiv2}>
                <input name='defending' type="range" onChange={handleChange} min="0" max="200" />
                <p>{newPokemon.defending}</p>
            </div>
            </div>
            {errors.defending ? <p className={styles.errors}>{errors.defending}</p> : null}
            <div className={styles.inputDiv}>
            <h2><span>VELOCIDAD</span></h2>
            <div className={styles.inputDiv2}>
                <input name='speed' type="range" onChange={handleChange} min="0" max="200" />
                <p>{newPokemon.speed}</p>
            </div>
            </div>
            {errors.speed ? <p className={styles.errors}>{errors.speed}</p> : null}
            <div className={styles.inputDiv}>
            <h2><span>ALTURA</span></h2>
            <div className={styles.inputDiv2}>
                <input name='height' type="range" onChange={handleChange} min="0" max="200" />
                <p>{newPokemon.height}</p>
            </div>
            </div>
            {errors.height ? <p className={styles.errors}>{errors.height}</p> : null}
            <div className={styles.inputDiv}>
            <h2><span>PESO</span></h2>
            <div className={styles.inputDiv2}>
                <input name='weight' type="range" onChange={handleChange} min="0" max="200" />
                <p>{newPokemon.weight}</p>
            </div>
            </div>
            {errors.weight ? <p className={styles.errors}>{errors.weight}</p> : null}
            <div className={styles.inputDiv}>
                <h2><span>IMAGEN</span></h2>
                <input name='imageDefault' type="text" onChange={handleChange}/>                
            </div>
            {errors.imageDefault ? <p className={styles.errors}>{errors.imageDefault}</p> : null}
                <h2><span>TIPOS:</span></h2>
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
            <button className={styles.submitBtn} type="submit"><span>Agregar</span></button>
        </form>
    </div>
    )
}

export default Create