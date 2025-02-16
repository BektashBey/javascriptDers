import fs from "fs";

const load = (filename) => {
  try {
    const file = fs.readFileSync(`./${filename}.json`, "utf8");
    return JSON.parse(file);
  } catch (error) {
    return []; // Dosya yoksa boş liste döndür
  }
};

const save = (filename, objects) => {
  fs.writeFileSync(`./${filename}.json`, JSON.stringify(objects, null, 2));
};

const insert = (filename, object) => {
  const objects = load(filename);
  objects.push(object);
  save(filename, objects);
};

const remove = (filename, index) => {
  const objects = load(filename);
  if (index >= 0 && index < objects.length) {
    objects.splice(index, 1);
    save(filename, objects);
  }
};

// const express = require("express");
import express from "express";
// const bodyParser = require("body-parser");
import bodyParser from "body-parser";

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/users", (req, res) => {
  const users = load("users");

  res.status(200).json({ data: users });
});

app.post("/users", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;

  insert("users", req.body);
  res.send("category oluşturuldu!");
});

app.delete("/users/:index", (req, res) => {
  const index = req.params.index;

  remove("users", index);

  res.send("category silidi!");
});

app.listen(3000, () => {
  console.log("started listening");
});
export { load, save, insert, remove };
