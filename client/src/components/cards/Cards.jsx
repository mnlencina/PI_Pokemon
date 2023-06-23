import React, { useState } from "react";
import Card from "../card/Card";
import styles from './Cards.module.css'
import { Paginations } from "../paginations/Paginations";
import { useDispatch, useSelector } from "react-redux";
import { filterDB, orderAtackPok, orderNamePok } from "../../redux/actions";


const Cards = (props)=>{
    const {pokemon} = useSelector((state)=> state)
    const dispatch = useDispatch()
    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(12);
    const [order, setOrder] = useState('');
    const [atack, setAtack] = useState('')
    
    
    const maximo = pokemon.length / porPagina;
    
    const handleOrderName = (e)=>{
        e.preventDefault();
        dispatch(orderNamePok(e.target.value));
        setOrder(e.target.value); 
    }
    
    const handleOrderAtaque = (e)=>{
        e.preventDefault()
        dispatch(orderAtackPok(e.target.value))
        setAtack(e.target.value)
    }
    
    const handlerData = (e)=>{
        console.log(e.target.checked);
        dispatch(filterDB(e.target.checked))
    }
    
    return(
        <div>
            <div className={styles.filterDiv}>
                <div className={styles.select}>
                <select onChange={handleOrderName} value={order}>
                    <option value='name'>Nombre</option>
                    <option value='asc'>A - Z</option>
                    <option value='desc'>Z - A</option>
                </select>
                </div>
                <div className={styles.select}>
                <select onChange={handleOrderAtaque} value={atack}>
                    <option value="ataque">Ataque</option>
                    <option value="mayorAtaque">+ Ataque</option>
                    <option value="menorAtaque">- Ataque</option>
                </select>
                </div>
                <label className={styles.switch}>
                    <input onChange={handlerData} type="checkbox"/>
                    <span className={styles.slider}></span>
                </label>
            </div>
            <div>
               {<Paginations pagina={pagina} setPagina={setPagina} maximo={maximo} setPorPagina={setPorPagina} />}
            </div>
            <div className={styles.cardsDiv}>
            {pokemon.slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
            ).map((p, i) =>
                <Card
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    life={p.life}
                    stroke={p.stroke}
                    defending={p.defending}
                    speed={p.speed}
                    height={p.height}
                    weight ={p.weight}               
                    imageDefault={p.imageDefault}
                    imageF={p.imageF}
                    types={p.types}
                />
            )}
            
            </div>     
            
        </div>
    )
}

export default Cards;