// fotbol kubübu kurulcak
// fotbol kulübu isim  = name
// tkenik direktör = td
// oyuncular  => oyuncular eklenicek listeye = players
// kuruluş yılı "number" = date

class Club {
  constructor(name, td, date) {
    this.name = name;
    this.td = td;
    this.players = [];
    this.date = date;
  }

  addNewPlayer(name, age) {
    const player = new Player(name, age);

    this.players.push(player);
  }
}

class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const club = new Club("Xınıs Spor", "Zeynel Mertoğlu", 2010);

club.addNewPlayer("Onur Anıl Mertoğlu", 17);
club.addNewPlayer("Huseyin Cristiano Gunduz", 38);

//console.log(club.players);

console.log("kulüp oyuncu sayısı: " + club.players.length);
