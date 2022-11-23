const express = require("express");
const router = express.Router();
const animalsService = require("../service/animalsService");

router.get("/animals", async function (req, res, next) {
  // console.log("GET ALL", animals);
  try {
    const animals = await animalsService.getAnimals();
    res.json(animals);
  } catch (e) {
    next(e);
  }
});

router.post("/animals", async function (req, res, next) {
  // console.log("SAVE", req.body)
  try {
    const animal = req.body;
    const newAnimal = await animalsService.saveAnimal(animal);
    res.status(201).json(newAnimal);
  } catch (e) {
    next(e);
  }
});

router.get("/animals/:id", async function (req, res, next) {
  try {
    const animal = await animalsService.getAnimal(req.params.id);
    res.json(animal);
  } catch (e) {
    next(e);
  }
});

router.put("/animals/:id", async function (req, res, next) {
  //console.log("UPDATE", animal);
  const animal = req.body;
  try {
    await animalsService.updateAnimal(req.params.id, animal);
    res.status(204).end();
  } catch (e) {
    next(e);
  }
});

router.delete("/animals/:id", async function (req, res) {
  try {
    await animalsService.deleteAnimal(req.params.id);
    res.status(204).end();
  } catch (e) {
    next(e);
  }
});

module.exports = router;
