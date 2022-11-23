const crypto = require("crypto");
const axios = require("axios");
const animalsService = require("../service/animalsService");

const generate = function () {
  return crypto.randomBytes(20).toString("hex");
};

const request = function (url, method, data) {
  return axios({ url, method, data, validateStatus: false });
};

test("Should get animals", async function () {
  const animal1 = await animalsService.saveAnimal({name: generate(), age: generate()});
  const animal2 = await animalsService.saveAnimal({name: generate(), age: generate()});
  const animal3 = await animalsService.saveAnimal({name: generate(), age: generate()});

  const response = await request("http://localhost:3003/animals", "get");
  expect(response.status).toBe(200);
  const animals = response.data;
  expect(animals).toHaveLength(3);

  await animalsService.deleteAnimal(animal1.id);
  await animalsService.deleteAnimal(animal2.id);
  await animalsService.deleteAnimal(animal3.id);
});


test("Should save a animal", async function () {
  const data = {
    name: generate(),
    age: generate(),
  };
  const response = await request("http://localhost:3003/animals", "post", data);
  expect(response.status).toBe(201);
  const animal = response.data;
  expect(animal.name).toBe(data.name);
  expect(animal.age).toBe(data.age);
  await animalsService.deleteAnimal(animal.id);
});

test('Should not save a animal', async function () {
	const data = { name: generate(), age: generate() };
	const response1 = await request('http://localhost:3003/animals', 'post', data);
	const response2 = await request('http://localhost:3003/animals', 'post', data);
	expect(response2.status).toBe(409);
	const animal = response1.data;
	await animalsService.deleteAnimal(animal.id);
});

test("Should update a animal", async function () {
  const animal = await animalsService.saveAnimal({
    name: generate(),
    age: generate(),
  });
  animal.name = generate();
  animal.age = generate();
  const response = await request(`http://localhost:3003/animals/${animal.id}`, "put", animal);
  expect(response.status).toBe(204);

  const updateAnimal = await animalsService.getAnimal(animal.id);
  expect(updateAnimal.name).toBe(animal.name);
  expect(updateAnimal.age).toBe(animal.age);
  await animalsService.deleteAnimal(animal.id);
});

test('Should not update a animal', async function () {
	const animal = {
		id: 1
	};
	const response = await request(`http://localhost:3003/animals/${animal.id}`, 'put', animal);
	expect(response.status).toBe(404);
});

test("Should delete a animal", async function () {
    const animal = await animalsService.saveAnimal({
      name: generate(),
      age: generate(),
    });
    const response = await request(`http://localhost:3003/animals/${animal.id}`, "delete");
    expect(response.status).toBe(204);

    const animals = await animalsService.getAnimals();
    expect(animals).toHaveLength(0);
  });