const axios = require('axios')

const getPokNameOrId = async (req, res)=>{

 let {id, name} = req
 console.log({id, name});
 let urlGet;
 try {
     if (id) urlGet = `https://pokeapi.co/api/v2/pokemon/${id}`;
     else urlGet = `https://pokeapi.co/api/v2/pokemon/${name}`;   
    
    const {data} = await axios.get(urlGet)
    
    const pokemon = {
        id : data.id,
        name : data.name,
        life : data.stats[0].base_stat,
        stroke : data.stats[1].base_stat,
        defending : data.stats[2].base_stat,
        speed : data.stats[5].base_stat,
        height : data.height,
        weight : data.weight,
        imageDefault: data.sprites.other.dream_world.front_default,
        imageF : data.sprites.other.home.front_default,
        imageB : data.sprites.other.home.front_shiny,
        types: data.types.map((t) => t.type.name),
    };
    
    console.log(pokemon);
    return pokemon
 } catch (error) {
    res.status(404).json({error: error.messaje})
 }
}

module.exports = getPokNameOrId