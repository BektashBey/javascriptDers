const fs = require("fs").promises;

const load = async (filename) => {
  try {
    const file = await fs.readFile(`./${filename}.json`, "utf8");
    return JSON.parse(file);
  } catch (error) {
    return []; // Dosya yoksa boş liste döndür
  }
};

const save = async (filename, objects) => {
  await fs.writeFile(`./${filename}.json`, JSON.stringify(objects, null, 2));
};

const insert = async (filename, object) => {
  const objects = await load(filename);
  objects.push(object);
  await save(filename, objects);
};

const remove = async (filename, index) => {
  const objects = await load(filename);
  if (index >= 0 && index < objects.length) {
    objects.splice(index, 1);
    await save(filename, objects);
  }
};

// Kullanım Örnekleri
(async () => {
  await insert("users", { id: 1, name: "Ali", age: 25 });
  await insert("users", { id: 2, name: "Ayşe", age: 30 });

  const users = await load("users");
  console.log(users); // Kullanıcıları ekrana bas

  await remove("users", 0);

  const updatedUsers = await load("users");
  console.log(updatedUsers); // İlk kullanıcıyı sildikten sonra listeyi ekrana bas
})();

export { load, save, insert, remove };
