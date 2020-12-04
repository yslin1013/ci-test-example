const functions = require('./functions');

// toEqual
test('User should be Alison object', () => {  // toBe will fail
  expect(functions.user()).toEqual({
    firstName: 'Alison',
    lastName: 'Lin '
  });
});

// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});