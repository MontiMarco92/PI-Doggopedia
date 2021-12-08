const router = require ('express').Router();
const {Dog, Temperament} = require('../db.js')
const axios = require('axios');
const {API_KEY} = process.env;

//apiRequest func. defined to require it in other routes.

async function apiRequest(){
    return (await axios.get('https://api.thedogapi.com/v1/breeds', {headers: {'x-api-key' : `${API_KEY}`}})).data;
}


router.get('/', async (req, res) =>{
    const {name} = req.query;
    
    try{
        //api call to retrieve all dogs
        const apiResponse = await apiRequest();
        
        //DB call to retrieve all previously saved dogs  - referenced temperaments for every dog are recalled from temperaments table through intermediate table
        const dbResponse = await Dog.findAll({
            attributes: {exclude: ['createdAt', 'updatedAt']},
            include: [{
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }]
        })
        // console.log(JSON.stringify(dbResponse, null, 2))
        // Data from api and DB are mergerd in unique array
        const mergedData = [...dbResponse, ...apiResponse];
        
        //required data is formatted
        const result = mergedData.map(e =>{
            return{
                id: e.id, //id?
                img: e.image,
                name: e.name,
                temperament: e.temperaments ? e.temperaments.flatMap(i=> i.name).join(', ') : e.temperament,
                weight: e.weight
            }
        })
        
        //formatted result is filtered if query name is provided, else every result is sent to FE
        if(req.query.name){
    
            const queryResult = result.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
            res.send(queryResult) 
            //programar respuesta en caso de no encontrar perros con el query, desde el front
        } else{
            res.send(result);
        }
         
    // solucionar situacion en que cuando no existe algo diferente a name en query string devuelva error, y si no hay nada por query devolver
    // listado completo de perros
    } 
    catch(err) {console.log(err)}
    //averiguar como manejar errores.. que codigo mandar al front en caso de error, etc.
    
})  

module.exports = {
    getDogs: router,
    apiRequest
}