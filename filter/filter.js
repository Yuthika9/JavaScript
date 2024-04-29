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

const numOdd = (num) => {   return num%2!== 0;  }


//checking for Even Numbers and Odd Numbers
const numbers = [1,2,3,4,5,6,7,8,9];

const evenNumber = customFilter(numbers, (num) => num%2===0);
console.log(evenNumber);

const oddNumber = customFilter(numbers,numOdd);
console.log(oddNumber);

//checking for the length of the names
const names = ["james","yuthika","annushka","ron","jon"];
const lengthGreaterThanFour = customFilter(names, name => name.length > 4);
console.log(lengthGreaterThanFour);