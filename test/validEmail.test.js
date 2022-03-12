const { TestWatcher } = require('jest');
const validEmail = require('./validEmail');

test('email -> true', () => {
    expect(validEmail.isValidEmail('dbasurco@gmail.com')).toBe(true);
});

test('email -> false', () => {
    expect(validEmail.isValidEmail('dbasurcogmail.com')).toBe(false);
});