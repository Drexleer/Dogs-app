const { Dog, Temperament } = require('../db.js');

const createDog = async (req, res) => {
    const {
        name,
        height,
        weight,
        life_span,
        temperaments,
        image
    } = req.body;
    // Crea un nuevo perro en la base de datos
    try {
        let [dogCreated, created] = await Dog.findOrCreate({
            where: { name: name },
            defaults: {
                name,
                height,
                weight,
                life_span,
                image: image || "https://www.publicdomainpictures.net/pictures/260000/velka/dog-face-cartoon-illustration.jpg",
            },
        });

        if (!created) {
            return res.status(404).send("Dog already exists");
        }
        const temperamentsDb = await Temperament.findAll({ where: { name: temperaments } });
        await dogCreated.addTemperaments(temperamentsDb);

        return res.status(200).send(dogCreated);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = createDog;