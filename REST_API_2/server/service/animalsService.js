const animalsData = require('../data/animalsData');

exports.getAnimals = function () {
    return animalsData.getAnimals();
};

exports.getAnimal = async function (id) {
    const animal = await animalsData.getAnimal(id);
    if(!animal) throw new Error('Animal not found');
    return animal
}

exports.saveAnimal = async function (animal) {
    const existingAnimal = await animalsData.getAnimalByName(animal.name);
    if(existingAnimal) throw new Error('Animal already exists')
    return animalsData.saveAnimal(animal)
};

exports.deleteAnimal = function(id){
    return animalsData.deleteAnimal(id)
};

exports.updateAnimal = async function(id, animal){
    await exports.getAnimal(id);
    return animalsData.updateAnimal(id, animal)
}