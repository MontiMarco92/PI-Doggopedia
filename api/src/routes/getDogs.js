const router = require ('express').Router();
const axios = require('axios');
const {API_KEY} = process.env;
const {Dog, Temperament} = require('../db.js')


async function apiRequest(){
    return (await axios.get('https://api.thedogapi.com/v1/breeds', {headers: {'x-api-key' : `${API_KEY}`}})).data;
}

router.get('/', async (req, res) =>{
    
    const {name} = req.query;

    const apiResponse = await apiRequest();
    // const apiResult = apiResponse.map(e=>{
    //     return {
    //         id: e.id, //id?
    //         img: e.image,
    //         name: e.name,
    //         temperament: e.temperament,
    //         weight: e.weight
    //     }
    // });

    const dbResponse = await Dog.findAll({include: Temperament})
    console.log(JSON.stringify(dbResponse, null, 2))

    const mergedData = [...dbResponse, ...apiResponse];
    

    const result = mergedData.map(e =>{
        return{
            id: e.id, //id?
            img: e.image,
            name: e.name,
            temperament: e.temperament,
            weight: e.weight
        }
    })
    
    res.send(result);
    
    
    
    // if(req.query.name) {
    //     let {name} = req.query;

    //     async function getDogsByName(){
    //         try{
    //             const response = (await axios.get('https://api.thedogapi.com/v1/breeds', {headers: {'x-api-key' : `${API_KEY}`}})).data;
    //             const aux = response.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
    //             const result = aux.map(e =>{
    //                 return{
    //                 id: e.id,    //id?
    //                 img: e.image,
    //                 name: e.name,
    //                 temperament: e.temperament,
    //                 weight: e.weight
    //                 }
    //             });
    //             res.send(result);
    //         } catch(err){console.log(err)};
    //     }
    //     getDogsByName()
        
        
    // } else{
    //     let response = null;
    //     axios.get('https://api.thedogapi.com/v1/breeds', {
    //         headers: {'x-api-key' : `${API_KEY}`}
    //     })
    //     .then(r => {
    //         response = r.data;
    //         console.log(response);
    //         let result = response.map(e =>{
    //            return {
    //                id: e.id, //id?
    //                img: e.image,
    //                name: e.name,
    //                temperament: e.temperament,
    //                weight: e.weight
    //            }
    //         })
    //         res.send(result);
    //     })
    //     .catch(err => console.log(err))
    // }
    
    
// se debe llamar tmb a la base de datos y unir las respuestas para enviarlas al front?    
// solucionar situacion en que cuando no existe algo diferente a name en query string devuelva error, y si no hay nada por query devolver
// listado completo de perros
})

module.exports = router;