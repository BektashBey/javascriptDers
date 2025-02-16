// const fs = require("fs");

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

export { load, save, insert, remove };

// // Kullanım Örnekleri
// insert("users", { id: 1, name: "Ali", age: 25 });
// insert("users", { id: 2, name: "Ayşe", age: 30 });
// console.log(load("users")); // Kullanıcıları ekrana bas
// remove("users", 0);
// console.log(load("users")); // İlk kullanıcıyı sildikten sonra listeyi ekrana bas
