import Nerf from './nerf.js';

test.each([
  [1, 100],
  [2, 90],
  [3, 80],
  [4, 70],
  [5, 60],
  [6, 50],
  [7, 40],
  [8, 30],
  [9, 20],
  [10, 10],
  [11, 0],
  [15, 0],
])('should return correct attack without dope', (dist, result) => {
  const Mag = new Nerf(100);
  expect(Mag.getАttack(dist)).toBe(result);
});

test('should set stoned', () => {
  const Mag = new Nerf(100);
  Mag.setStoned();
  expect(Mag.stoned).toBe(true);
});

test('should remove stoned', () => {
  const Mag = new Nerf(100);
  Mag.setStoned();
  Mag.removeStoned();
  expect(Mag.stoned).toBe(false);
});

test.each([
  [1, 100],
  [2, 85],
  [3, 72],
  [4, 60],
  [5, 48],
  [6, 37],
  [7, 26],
  [8, 15],
  [9, 4],
  [10, 0],
  [11, 0],
  [15, 0],
])('should return correct attack with dope', (dist, result) => {
  const Mag = new Nerf(100);
  Mag.setStoned();
  expect(Mag.getАttack(dist)).toBe(result);
});
