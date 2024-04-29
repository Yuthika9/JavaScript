const customReduce = (array,callback,initialValue) => {

    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let iterator = initialValue !== undefined ? 0 : 1;

    for( iterator ; iterator < array.length; iterator++ ){

        accumulator = callback(accumulator, array[iterator], iterator, array);

    };

    return accumulator;
}

module.exports = customReduce;
