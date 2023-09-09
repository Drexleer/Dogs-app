const { Router } = require('express');
const getAllDogs = require('../controllers/getAllDogs');
const getDogById = require('../controllers/getDogbyId');
const getDogByName = require('../controllers/getDogByName');
const createDog = require('../controllers/createDog');
const getTemperaments = require('../controllers/getTemperaments');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter); 
router.use('/dogs/:idRaza', getDogById);
router.use('/dogs', getDogByName);
router.use('/dog', createDog);
router.use('/alldogs', getAllDogs);
router.use('/temperaments', getTemperaments);

module.exports = router;
