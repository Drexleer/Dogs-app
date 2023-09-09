const axios = require('axios');
const { Dog, Temperament } = require('../db');
const { API, API_KEY } = process.env;

const allDogsCombined = async () => {
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
        include: { model: Temperament, attributes: ['name'], through: { attributes: [] } },
    })
    //Combinar la base de datos y la api
    const allDogs = [...apiDogs, ...allDogsDb]
    return allDogs;
};



const getDogsByName = async (req, res) => {
    const { name } = req.query;
    const allDogs = await allDogsCombined();

    if (name) {
        const dog = allDogs.filter(d => d.name.toLowerCase().includes(name.toLowerCase())); //si el perro existe guardare sus parámetros aca.
        dog.length ? res.status(200).send(dog) : res.status(404).send("Dog not found");
    } else {
        res.status(200).send(allDogs);
    }
};

module.exports = getDogsByName;