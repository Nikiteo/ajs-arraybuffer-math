export default class Nerf {
  constructor(attack) {
    this.attack = attack;
    this.stoned = false;
  }

  setStoned() {
    this.stoned = true;
  }

  removeStoned() {
    this.stoned = false;
  }

  getАttack(dist) {
    let resultAttack = this.attack;

    resultAttack *= (1 - 0.1 * (dist - 1));

    if (this.stoned) {
      resultAttack -= Math.log2(dist) * 5;
    }

    if (resultAttack < 0) {
      resultAttack = 0;
    }

    return Math.round(resultAttack, 0);
  }
}
