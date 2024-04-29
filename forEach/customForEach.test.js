const assert = require('assert');
const customForEach = require('./customForEach.js');


// Test customForEach
const shouldReturnTheArray = () => {

  const array = [1, 2, 3];
  let counter = 0;

  customForEach(array, (element, index) => {

    assert.strictEqual(element, array[index], "Element and index should match.");
    counter++;

  });

  assert.strictEqual(counter, array.length, "Counter should match array length.");
};




try {

  shouldReturnTheArray();
  console.log("All tests passed successfully.");

} catch (error) {

  console.error("Test failed:", error.message);

}
