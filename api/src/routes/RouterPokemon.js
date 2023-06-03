const { Router } = require('express');
const getPokNameOrId = require('../controllers/getPokNameOrId');
const postPokemon = require('../controllers/postPokemon')
const {Type} = require('../db')

const router = Router();

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
    try {      
        let newPok = req.body;        
        let {pokCreated} = await postPokemon(newPok)
        console.log(pokCreated);
        let typesDb = await Type.findAll({ where: { name: newPok.type } });
        pokCreated.addType(typesDb);
        res.status(201).send('Pokemon Creado');
        
    } catch (error) {
        res.status(500).json({error: error.messaje})
        console.log(error);
    }
});

module.exports = router;