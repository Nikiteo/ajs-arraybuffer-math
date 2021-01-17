import Nerf from '../nerf/nerf.js';

export default class Daemon extends Nerf {
  constructor(...args) {
    super(...args, 'Daemon');
  }
}
