const customMap = (array, callback) => {

    const mappedArray = [];

    for (let i = 0; i < array.length; i++) {
      mappedArray.push(callback(array[i], i, array));
    }
    
    return mappedArray;
  };
  
  module.exports = customMap;
  