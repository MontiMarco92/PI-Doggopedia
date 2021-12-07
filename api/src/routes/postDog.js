const router = require('express').Router();
const { Dog } = require('../db.js');



router.post('/', async (req, res)=>{
    const {name, height, weight, lifeSpan, temperaments} = req.body;

    const addedBreed = await Dog.create({
        name: name,
        height: height,
        weight: weight,
        lifeSpan: lifeSpan
    })
    
    const promises = temperaments.map((e)=> {return addedBreed.addTemperament(e)});
    await Promise.all(promises);
    res.send('Dog Added');
})

module.exports = router;