const express = require("express");
const flatted = require("flatted");
const db = require("../week-4/db");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.set("view engine", "pug");

app.get("/users", async (req, res) => {
  // const data = await db.load("./users");
  // console.log("data", data);
  const data = [
    {
      id: 2,
      name: "Ayşe",
      age: 30,
    },
  ];

  res.render("users", { data });
});

app.get("/users/:usersId", async (req, res) => {
  const users = await users.find(req.params.usersId);
  res.render("Id", { users });
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("start listening on 3000");
});
