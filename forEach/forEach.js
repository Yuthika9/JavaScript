const customForEach = (array, callback) => {

    for (let iterator = 0; iterator < array.length; iterator++) {

      callback(array[iterator], iterator);

    }
  };


const arrayDisplay = (element,index) => {
                         return console.log(`Element at index ${index}: ${element}`);
 };


const numbers = [3,2,1,5,8,16];
customForEach(numbers, arrayDisplay);
  
