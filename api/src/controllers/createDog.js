const { Breed, Temperament } = require('../db');

const createDog = async (req, res) => {
    // console.log(req.body);
    try {
        let {
            name,
            min_height,
            max_height,
            min_weight,
            max_weight,
            min_life,
            max_life,
            temperaments,
            image,
        } = req.body;
        if (!image) {
            image = "https://www.publicdomainpictures.net/pictures/260000/velka/dog-face-cartoon-illustration.jpg";
        }
        // Validamos los datos. (para un futuro)
        // if (
        //     !name ||
        //     !/^[A-Za-z ]+$/.test(name) ||
        //     !min_height ||
        //     min_height < 15 ||
        //     !/^[0-9]+$/.test(min_height) ||
        //     !max_height ||
        //     max_height > 110 ||
        //     !/^[0-9]+$/.test(max_height) ||
        //     min_height > max_height ||
        //     !min_weight ||
        //     min_weight < 1 ||
        //     !/^[0-9]+$/.test(min_weight) ||
        //     !max_weight ||
        //     max_weight > 90 ||
        //     !/^[0-9]+$/.test(max_weight) ||
        //     min_weight > max_weight ||
        //     !min_life ||
        //     min_life < 1 ||
        //     !/^[0-9]+$/.test(min_life) ||
        //     !max_life ||
        //     max_life > 20 ||
        //     !/^[0-9]+$/.test(max_life) ||
        //     min_life > max_life ||
        //     temperaments.length == 0
        // )
        //     throw new Error('Manda bien los datos');


        // Unimos las alturas.
        const mixedHeight = [];
        mixedHeight.push(min_height, max_height);
        // Unimos las anchuras.
        const mixedWeight = [];
        mixedWeight.push(min_weight, max_weight);
        // Unimos el tiempo de vida.
        const mixedLife = [];
        mixedLife.push(min_life, max_life);
        // Creamos nuestro modelo.
        let newBreed = await Breed.create({
            name,
            height: mixedHeight,
            weight: mixedWeight,
            life_span: mixedLife,
            image,
        });
        //console.log(temperaments);
        // Buscamos los temperamentos en la db.
        temperaments.map(async (temperament) => {
            const associateTemperament = await Temperament.findAll({
                where: { name: temperament },
            });
            // Lo asociamos con la raza creada.
            await newBreed.addTemperament(associateTemperament);
        });
        // console.log(newBreed);
        res.status(200).send(newBreed);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = createDog;