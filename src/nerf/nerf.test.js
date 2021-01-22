import Nerf from './nerf.js';

test('distance 2, attack = 9', () => {
  const mage = new Nerf(10, 2);
  expect(mage.attack).toBe(9);
});

test('distance 3, attack = 8', () => {
  const mage = new Nerf(10, 3);
  expect(mage.attack).toBe(8);
});

test('distance 4, attack = 7', () => {
  const mage = new Nerf(10, 4);
  expect(mage.attack).toBe(7);
});

test('.stoned = true', () => {
  const mage = new Nerf(10, 1);
  mage.stoned = true;
  expect(mage.stoned).toBe(true);
});

test('attack = 100 + stoned -> attack = 85', () => {
  const mage = new Nerf(null, 2);
  mage.attack = 100;
  mage.stoned = true;
  expect(mage.attack).toBe(85);
});

test('attack = 0 -> .attack = 0', () => {
  const mage = new Nerf(0, 2);
  expect(mage.attack).toBe(85);
});
