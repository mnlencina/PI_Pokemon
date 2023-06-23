import React from "react";
import styles from './Card.module.css'
import NOTimage from '../img/startt2.gif'
import { Link } from "react-router-dom";

const Card = (props)=>{
    let imageDefault = '';  
    
    !props.imageDefault 
        ? imageDefault = props.imageF
        : imageDefault = props.imageDefault

    return(
    <>
    <Link to={`/detail/${props.id}`} className={styles.link}>
        <div className={styles.card}>
            <div className={styles.imgDefault}>
              
                {!imageDefault ? <img src={NOTimage} alt=""/> : <img src={imageDefault} alt=""/> } 
                            
            </div>
            <h3>{props.name}</h3>
            <div className={styles.alturaP}>
                <p>Altura: {props.height}</p>
                <p>Peso: {props.weight}</p>
            </div>
            <div>
                    <p>Vida: </p>
                <div className={styles.progresDiv}>
                    <progress value={props.life} max='250'/>
                    <p>{props.life}</p>
                </div>
                    <p>Ataque: </p>
                <div className={styles.progresDiv}>
                    <progress value={props.stroke} max='250'/>
                    <p>{props.stroke}</p>
                </div>
                    <p>Defensa: </p>
                <div className={styles.progresDiv}>
                    <progress value={props.defending} max='250'/>
                    <p>{props.defending}</p>
                </div>
                    <p>Velocidad: </p>
                <div className={styles.progresDiv}>
                    <progress value={props.speed} max='250'/>
                    <p>{props.speed}</p>
                </div>
            </div>
            
            
        </div>
    </Link>
    </>
    )
}

export default Card;