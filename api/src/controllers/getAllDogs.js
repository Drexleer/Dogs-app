const axios = require('axios');
const { Dog, Temperament } = require('../db')
const { API, API_KEY } = process.env;

const getAllDogs = async (req, res) => {

    try {
        //Obtener perros de la Api
        const response = await axios.get(`${API}${API_KEY}`)
        const apiDogs = response.data.map((el) => {
            return {
                id: el.id,
                name: el.name,
                image: el.reference_image_id,
                temperament: el.temperament,
                weight: el.weight.metric,
                height: el.height.metric,
                life_span: el.life_span,
            }
        });
        //Obtener perros de la Db
        const allDogsDb = await Dog.findAll({
            include: {
                model: Temperament,
                attributes: ['name'], //atributos que quiero traer del modelo Temperament, el id lo trae automático
                through: {
                    attributes: [],//traer mediante los atributos del modelo
                },
            }
        })
        //Combinar la base de datos y la api
        const allDogs = [...apiDogs, ...allDogsDb]

        res.json(allDogs)

    } catch (error) {
        res.status(404).json({ message: 'Error interno del servidor' })
    }
}

module.exports = getAllDogs;