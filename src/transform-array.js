const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error (`'arr' parameter must be an instance of the Array!`);
  }
  const LENGTH = arr.length;
  let transformedArray = [];
  let i = 0;
  while (i < LENGTH) {
    if (arr[i] === '--discard-next') {
      i+= 3;
    } else if (arr[i] === '--discard-prev') {
      if (transformedArray) {
        transformedArray.pop();
      }
      i++;
    } else if (arr[i] === '--double-next') {
      if (i + 1 < LENGTH) {
        transformedArray.push(arr[i+1]);
      }
      i++;
    } else if (arr[i] === '--double-prev') {
      if (i - 1 < 0) {
        i++;
      } else {
        transformedArray.push(arr[i-1]);
        i++;
      } 
    } else {
        transformedArray.push(arr[i]);
        i++;
      }
  }
  return transformedArray;
}
 
module.exports = {
  transform
};
