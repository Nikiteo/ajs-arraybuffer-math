export default class Nerf {
  constructor(attack, dist) {
    this.attack = attack;
    this.stoned = false;
    this.dist = dist;
  }

  set stoned(value) {
    this.xstoned = value;
  }

  get stoned() {
    return this.xstoned;
  }

  set attack(value) {
    this.xattack = value;
  }

  get attack() {
    let attack = this.xattack * ((11 - this.dist) / 10);

    if (this.stoned) {
      attack -= Math.log2(this.dist) * 5;
    }
    return (attack > 0) ? Math.round(attack) : 0;
  }
}
