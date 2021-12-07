const router = require('express').Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs = require('./getDogs.js');
const getDogDetail = require ('./getDogDetail.js');
const getTemperament = require('./getTemperament.js');
const postDog = require('./postDog.js');



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', getDogs);
router.use('/dogs', getDogDetail);
router.use('/temperament', getTemperament);
router.use('/dog', postDog);  

module.exports = router;
