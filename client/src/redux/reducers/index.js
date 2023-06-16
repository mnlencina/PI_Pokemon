import { 
  GET_ALLPOKEMON,
  POST_POKEMON,
  } from '../actionsType/index';

const initialState = {
pokemon:[],
allPokemon:[],
types:[],
detail:[],
};


export default function rootReducer(state = initialState, {type,payload}) {
  switch (type) {
    case GET_ALLPOKEMON:
      return {
        ...state,
        allPokemon : payload
      }
    case POST_POKEMON:
        return {
          ...state
        };
    
default: return {...state};
};
};
