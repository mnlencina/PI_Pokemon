const axios = require('axios')


const getPokemonAll = async (req, res)=>{ 
    
    let allPokemon = []
        
    try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281`)
        const {results}= data
               
        const pokPromis = [];
        
        results.forEach(e => {
            let {url} = e
            pokPromis.push(url)
        });
               
        const allPok = await Promise.all(pokPromis.map(url => axios.get(url)))
        
        allPok.forEach(obj=>{ 
            const e = obj.data
                const pokemon = {
                    id : e.id,
                    name : (e.name).charAt(0).toUpperCase() + (e.name).slice(1),
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
            allPokemon.push(pokemon);                
        })
        
        return allPokemon
        
    } catch (error) {
        res.status(404).json({error: error.messaje})
    }       
                    
}    

module.exports = getPokemonAll