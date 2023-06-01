const axios = require('axios')

const getPokNameOrId = async (req, res)=>{
 let {name} = req.body
 let {id} = req.query
 let urlGet;
 try {
     if (id) urlGet = `https://pokeapi.co/api/v2/pokemon/${id}`;
     else urlGet = `https://pokeapi.co/api/v2/pokemon/${name}`;   
    
    let onePok = await axios.get(urlGet)
    
    let pokemon = {
        id : onePok.id,
        name : onePok.name,
        life : onePok.stats[0].base_stat,
        stroke : onePok.stats[1].base_stat,
        defending : onePok.stats[2].base_stat,
        speed : onePok.stats[5].base_stat,
        height : onePok.height,
        weight : onePok.weight,
        imageDefault: onePok.sprites.other.dream_world.front_default,
        imageF : onePok.sprites.other.home.front_default,
        imageB : onePok.sprites.other.home.front_shiny,
        types: onePok.types.map((t) => t.type.name),
    };
    
    res.status(201).json(pokemon)
    console.log(pokemon);
 } catch (error) {
    res.status(500).json({error: error.message})
 }
}

module.exports = getPokNameOrId