import React from "react";
import styles from './Card.module.css'

const Card = (props)=>{
    return(
    <>
    <div>
        <div className={styles.card}>
            <div className={styles.imgDefault}>
            <img  src={props.imageDefault} alt="" />
            </div>
            <h3>{props.name}</h3>
            <div className={styles.progresDiv}>
                <p>Altura: {props.height}</p>
                <p>Peso: {props.weight}</p>
            </div>
            <div>
                    <p>Vida: </p>
                <div className={styles.progresDiv}>
                    <progress value={props.life} max='200'/>
                    <p>{props.life}</p>
                </div>
                    <p>Ataque: </p>
                <div className={styles.progresDiv}>
                    <progress value={props.stroke} max='200'/>
                    <p>{props.stroke}</p>
                </div>
                    <p>Defensa: </p>
                <div className={styles.progresDiv}>
                    <progress value={props.defending} max='200'/>
                    <p>{props.defending}</p>
                </div>
                    <p>Velocidad: </p>
                <div className={styles.progresDiv}>
                    <progress value={props.speed} max='200'/>
                    <p>{props.speed}</p>
                </div>
            </div>
            
            
        </div>
    </div>
    </>
    )
}

export default Card;