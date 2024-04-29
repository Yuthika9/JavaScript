function customFilter(array,callback){

    const filterArray = [];

    for(let iterator = 0; iterator<array.length; iterator++){

        if(callback(array[iterator],iterator,array))
        {

            filterArray.push(array[iterator]);

        }
    }

    return filterArray;

} 

module.exports = customFilter;