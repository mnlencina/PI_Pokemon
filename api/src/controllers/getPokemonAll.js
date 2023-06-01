const axios = require('axios')


const getPokemonAll = async (req, res)=>{ 
    
    const pokemones = {
        allPokemon: [],
        next: null,
        previous: null,
    }      

    let {url} = req.body
    if(!url) url = `https://pokeapi.co/api/v2/pokemon`
    
    try {
        let {data} = await axios.get(url)
        let {results, next, previous}= data
        pokemones.next = next;
        pokemones.previous = previous;
        
        let pokPromis = [];
        
        results.forEach(e => {
            let {url} = e
            pokPromis.push(url)
        });
       
        let allPok = await Promise.all(pokPromis.map(url => axios.get(url)))
        
        allPok.forEach(obj=>{ 
            let e = obj.data
                let pokemon = {
                    id : e.id,
                    name : e.name,
                    life : e.stats[0].base_stat,
                    stroke : e.stats[1].base_stat,
                    defending : e.stats[2].base_stat,
                    speed : e.stats[5].base_stat,
                    height : e.height,
                    weight : e.weight,
                    imageDefault: e.sprites.other.dream_world.front_default,
                    imageF : e.sprites.other.home.front_default,
                    imageB : e.sprites.other.home.front_shiny,
                    types: e.types.map((t) => t.type.name),
                };                
            pokemones.allPokemon.push(pokemon);                
        })
        console.log(pokemones);    

        res.status(201).json(pokemones)
        
    } catch (error) {
        res.status(500).send({error: error.message})
    }       
                    
}    

module.exports = getPokemonAll