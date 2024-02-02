const Animal = require("../models/Animal");

exports.getAll = () => Animal.find().populate("owner");

exports.getOne = (animalId) => Animal.findById(animalId).populate("owner");

exports.create = (animalData) => Animal.create(animalData);

exports.delete = (animalId) => Animal.findByIdAndDelete(animalId);

exports.edit = (animalId, animalData) =>
  Animal.findByIdAndUpdate(animalId, animalData);

exports.donate = async (userId, animalId) => {
  const animal = await Animal.findById(animalId);
  animal.donators.push(userId);

  return animal.save();
};

exports.search = async (location) => {
  let animals = await this.getAll();

  if (location) {
    animals = animals.filter(
      (x) => x.location.toLowerCase() == location.toLowerCase()
    );
  }

  return animals;
};

exports.getbyOwner = (userId) => Animal.find({ owner: userId });
