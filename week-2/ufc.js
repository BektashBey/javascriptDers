class UFC {
  constructor() {
    this.fighters = [];
  }
  addFighter(fighter) {
    this.fighters.push(fighter);
  }

  getP4PList() {
    return this.fighters.sort((a, b) => b.wins - a.wins);
  }
}
module.exports = UFC;
