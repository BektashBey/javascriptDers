const UFC = require("./ufc");
const Fighter = require("./fighter");

const ufc = new UFC();

const fighter1 = new Fighter("Jon 'BONES' Jones", "Heavy Weight", 29, 1);
const fighter2 = new Fighter(
  "Conor 'The Notorious' McGregor",
  "Light Weight",
  30,
  5
);

ufc.addFighter(fighter1);
ufc.addFighter(fighter2);

console.log(ufc.getP4PList());
