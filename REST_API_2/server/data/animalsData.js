const database = require("../infra/database");

exports.getAnimals = function () {
  return database.query("select * from petshop.animal");
};

exports.getAnimal = function (id) {
  return database.oneOrNone("select * from petshop.animal where id = $1", [id]);
};

exports.getAnimalByName = function (name) {
  return database.oneOrNone("select * from petshop.animal where name = $1", [
    name,
  ]);
};

exports.saveAnimal = function (post) {
  return database.one(
    "insert into petshop.animal (name, age, specie, breed, owner_name, owner_phone) values ($1, $2, $3, $4, $5, $6) returning *",
    [
      post.name,
      post.age,
      post?.specie,
      post?.breed,
      post?.owner_name,
      post?.owner_phone,
    ]
  );
};

exports.updateAnimal = function (id, post) {
  return database.none(
    "update petshop.animal set name = $1, age = $2, specie = $3, breed = $4, owner_name = $5, owner_phone = $6 where id = $7",
    [
      post.name,
      post.age,
      post?.specie,
      post?.breed,
      post?.owner_name,
      post?.owner_phone,
      id,
    ]
  );
};

exports.deleteAnimal = function (id) {
  return database.none("delete from petshop.animal where id=$1", [id]);
};
