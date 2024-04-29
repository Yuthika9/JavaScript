const assert = require('assert');
const customFilter = require('./customFilter');

// Test case 1: Filter even numbers
const shouldReturnEvenNumbers = () => {

  const array = [1, 2, 3, 4, 5];
  const expected = [2, 4];

  const result = customFilter(array, (element) => element % 2 === 0);

  assert.deepStrictEqual(result, expected, 'Should filter even numbers');

};

// Test case 2: Filter strings with length greater than 3
const shouldReturnStringsWithLengthGreaterThanFour = () => {

  const array = ["james","yuthika","annushka","ron","jon"];
  const expected = ["james","yuthika","annushka"];

  const result = customFilter(array, (element) => element.length > 3);

  assert.deepStrictEqual(result, expected, 'Should filter strings with length greater than 3');
};

// Test case 3: Empty array if no elements match the condition
const shouldReturnEmptyArray = () => {

  const array = [1, 3, 5, 7, 9];
  const expected = [];

  const result = customFilter(array, (element) => element % 2 === 0);

  assert.deepStrictEqual(result, expected, 'Should return an empty array if no elements match the condition');
};

// Run tests
try {
    
    shouldReturnEvenNumbers();
    shouldReturnEmptyArray();
    shouldReturnStringsWithLengthGreaterThanFour();

  console.log('All tests passed successfully.');

} catch (error) {

  console.error('Test failed:', error.message);

}
