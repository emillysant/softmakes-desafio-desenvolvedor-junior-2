create schema petshop;

create table petshop.animal (
    id serial PRIMARY KEY,
    name TEXT NOT NULL,
    age TEXT NOT NULL,
    specie TEXT,
    breed TEXT,
    owner_name TEXT,
    owner_phone TEXT
);


