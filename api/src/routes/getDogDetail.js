const router = require('express').Router();
const axios = require('axios');
const {API_KEY} = process.env;

router.get('/:breedId', (req, res)=>{
    const {breedId} = req.params;
    
    const apiRequest = async () =>{
        try {
            const response = (await axios.get('https://api.thedogapi.com/v1/breeds', {headers: {'x-api-key' : `${API_KEY}`}})).data;
            let aux = response.find(e =>e.id == breedId)
            let result = {
                    id: aux.id, //id?
                    img: aux.image,
                    name: aux.name,
                    temperament: aux.temperament,
                    height: aux.height,
                    weight: aux.weight,
                    lifeSpan: aux.life_span
            };
            res.send(result);
        } catch(err){console.log(err)}   
    }
    apiRequest();
})
module.exports = router;