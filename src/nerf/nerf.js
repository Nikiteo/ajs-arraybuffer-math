/* eslint-disable no-underscore-dangle */
export default class Nerf {
  constructor(attack, dist) {
    this.attack = attack;
    this.stoned = false;
    this.dist = dist;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    const dMultiplier = 1 - ((this.dist - 1) / 10);
    const sMultiplier = this.stoned ? Math.log2(this.dist) * 5 : 0;
    return dMultiplier > 0 ? Math.round(this._attack * dMultiplier - sMultiplier) : 0;
  }
}
