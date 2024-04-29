const assert = require('assert');
const customFilter = require('./customReduce');
const customReduce = require('./customReduce');

//Test Case 1: Returns the sum of the array
const shouldReturnTheSumOfTheArray = () => {

    const numbers = [2,4,5,8,1];
    const expected = 20;

    const result = customReduce(numbers, (accumulator,currentValue) => accumulator+currentValue,0);

    assert.strictEqual(result, expected, 'Should reduce an array of numbers to their sum');

};

//Test Case 2: Reduces the array to a concatenated string
const shouldReturnConcatenatedString = () =>{

    const name = ['My ','country ','is ','India!'];
    const expected = 'My country is India!';

    const result = customReduce(name, (accumulator, currentValue) => accumulator + currentValue, '');
    assert.strictEqual(result,expected, 'Should return the concatenated string');

};


//Test Case 3: Return the min of the array
const shouldReturnMinimum = () =>{

    const number = [2,77,67,1,34];
    const expected = 1;

    const result = customReduce(number,(accumulator,currentValue) => Math.min(accumulator,currentValue));
    assert.strictEqual(result,expected, 'Should return the minimum from the array ');

};

try{

    shouldReturnTheSumOfTheArray();
    shouldReturnConcatenatedString();
    shouldReturnMinimum()
    console.log('All tests passed successfully.');
}catch(error){

    console.error('Test failed:', error.message);
}