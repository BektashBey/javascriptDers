class Fighter {
  constructor(name, division, wins, loses) {
    this.name = name;
    this.division = division;
    this.wins = wins;
    this.loses = loses;
  }
  getWinRate() {
    const winRate = (this.wins / (this.wins + this.loses)) * 100;

    return winRate.toFixed(0) + "%";
  }
  introduce() {
    return `${this.name} isimli fighter ${this.division} division için dövüşüyor!`;
  }
}
module.exports = Fighter;
