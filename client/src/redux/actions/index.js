import axios from 'axios';
import { GET_ALLPOKEMON, GET_POKEMON_NAME, POST_POKEMON } from '../actionsType';


export function addAllPokemon(){
  const endpoint = 'http://localhost:3001/pokemon'
  return async function (dispatch){
    let {data} = await axios(endpoint)
    dispatch({
      type:GET_ALLPOKEMON,
      payload: data
    })
  }
}

export function postPokemon(newPoke){
  const endpoint = 'http://localhost:3001/pokemon'
  return async function (dispatch){
    const createPok = await axios.post(endpoint, newPoke);
    dispatch({
      type:POST_POKEMON,
      payload: createPok
    })    
  }   
};

export function addPokemon(name){
  const endpoint = 'http://localhost:3001/pokemon?name='+name;
  return async (dispatch) => {
    const data = await axios.get(endpoint)
      return dispatch({
        type: GET_POKEMON_NAME,
        payload: data
      })
  }
}

