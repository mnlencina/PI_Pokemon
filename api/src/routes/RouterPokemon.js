const { Router } = require('express');
const getPokemonAll = require('../controllers/getPokemonAll')
const getPokNameOrId = require('../controllers/getPokNameOrId');
const postPokemon = require('../controllers/postPokemon')
const {Type} = require('../db')

const router = Router();

router.get('/', async(req,res)=>{    
    console.log('paso por ALL');
    try {
        const pokemones = await getPokemonAll()
        res.status(201).json(pokemones)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.get('/', async (req, res) => { 
    const {name} = req.query
    
    try {
        const pokeID = await getPokNameOrId({name})
        res.json(pokeID)        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params
    
    try {
        const pokeID = await getPokNameOrId({id})
        res.json(pokeID)        
    } catch (error) {
        res.status(500).json({error: error.message})
    }  
});

router.post('/', async (req, res) => {
    console.log(req.body);
    try {      
        let newPok = req.body;        
        let {pokCreated} = await postPokemon(newPok)
        console.log(pokCreated);
        //busco tipo de pokemon de la DB..
        let typesDb = await Type.findAll({ where: { name: newPok.type } });
        //asocio el pokemon a la DB
        pokCreated.addType(typesDb);
        res.status(201).send('Pokemon Creado');
        
    } catch (error) {
        res.status(500).json({error: error.messaje})
        console.log(error);
    }
});

module.exports = router;