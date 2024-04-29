const customReduce = (array,callback,initialValue) => {

    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let iterator = initialValue !== undefined ? 0 : 1;

    for( iterator ; iterator < array.length; iterator++ ){

        accumulator = callback(accumulator, array[iterator], iterator, array);

    };

    return accumulator;
}

//calling the CustomReduce function to calculate the sum of an array
const number = [1,3,5,7,9];

const sum = customReduce(number,(accumulator,currentValue) => accumulator+currentValue,0);
console.log(sum);
