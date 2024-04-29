const assert = require('assert');
const customMap = require('./customMap');

// Test case 1: Double each number in the array
const shouldReturnIncrementedByOne = () => {

  const array = [1, 2, 3, 4, 5];
  const expected = [2, 3, 4, 5, 6];

  const result = customMap(array, (element) => element + 1);
  assert.deepStrictEqual(result, expected, 'Should increment each number in by one');

};

// Test case 2: Convert each string to uppercase
const shouldReturnUpperCase = () => {

  const array = ['hello', 'world'];
  const expected = ['HELLO', 'WORLD'];

  const result = customMap(array, (element) => element.toUpperCase());
  assert.deepStrictEqual(result, expected, 'Should convert each string to uppercase');

};

// Run tests
try {

    shouldReturnIncrementedByOne();
    shouldReturnUpperCase();

    console.log('All tests passed successfully.');

} catch (error) {
  console.error('Test failed:', error.message);
}
