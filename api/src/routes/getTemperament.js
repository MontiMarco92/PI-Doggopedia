const router = require('express').Router();
const axios = require('axios');
const {Temperament} = require('../db.js');
const{API_KEY} = process.env;

router.get('/', async function(req, res) {
    
    const dbCheck = await Temperament.findAll();
    if(dbCheck.length === 0){
        const apiRequest = async () =>{
            try{
                const response = (await axios.get('https://api.thedogapi.com/v1/breeds', {headers: {'x-api-key' : `${API_KEY}`}})).data;
                const aux = response.map(e=> e.temperament).filter(e => e !== undefined);
                const aux2 = aux.map(e => e.split(', ')).flat();
                const uniqueSet = new Set(aux2);
                const result = [...uniqueSet];
                const promises = result.map((e) => {return Temperament.create({name:e})});
                await Promise.all(promises)
            } catch(err){console.log(err)};
        }
        await apiRequest();
        const temperaments = await Temperament.findAll();
        res.send(temperaments);
    } else {
        console.log('no entra al if')
        res.send(dbCheck);
    }
});

module.exports = router;