const functions = require('./functions');

// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays
test('Alison should be in usernames', () => {
  usernames = ['John', 'Karen', 'Alison'];
  expect(usernames).toContain('Alison');
});