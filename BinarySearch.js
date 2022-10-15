binarySearch = (arr, value) => {
  let estimatedIndex,
    minIndex = 0,
    maxIndex = arr.length - 1;
  while (minIndex <= maxIndex) {
    estimatedIndex = Math.floor((minIndex + maxIndex) / 2);
    if (arr[estimatedIndex] === value) {
      return estimatedIndex;
    } else if (arr[estimatedIndex] < value) {
      minIndex = estimatedIndex + 1;
    } else {
      maxIndex = estimatedIndex - 1;
    }
  }
};

var testCase1 = binarySearch([2, 4, 1, 5], 5) // Output: 3
var testCase2 = binarySearch([2, 4, 1, 5, 10, 50, 12], 0) // Output: undefined
var testCase3 = binarySearch([50, 12, 4, 1, 5, 10], 5) // Output: 4
console.log(testCase1);
console.log(testCase2);
console.log(testCase3);
