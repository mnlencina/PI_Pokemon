import React, { useState } from "react";
import Card from "../card/Card";
import styles from './Cards.module.css'
import Paginacion  from "../paginacion/Paginacion";


const Cards = ({allPokemon})=>{
    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(12);
    
    const maximo = allPokemon.length / porPagina;    
    
    return(
        <div>
            <div>
               {<Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />}
            </div>
            <div className={styles.cardsDiv}>
            {allPokemon.slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
            ).map((p, i) =>
                <Card
                    key={p.id}
                    id={p.id}
                    name={(p.name)}
                    life={p.life}
                    stroke={p.stroke}
                    defending={p.defending}
                    speed={p.speed}
                    height={p.height}
                    weight ={p.weight}               
                    imageDefault={p.imageDefault}
                    imageB={p.imageB}
                    imageF={p.imageF}
                    types={p.types}
                />
            )}
            
            </div>     
            
        </div>
    )
}

export default Cards;