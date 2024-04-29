const customForEach = (array, callback) => {

    for (let iterator = 0; iterator < array.length; iterator++) {

      callback(array[iterator], iterator);

    }
  };


  module.exports = customForEach;