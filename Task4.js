function findTwoSumIndices(sortedArray, target) {
  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;

  while (leftPointer < rightPointer) {
    const currentSum = sortedArray[leftPointer] + sortedArray[rightPointer];

    if (currentSum === target) {
      return [leftPointer, rightPointer];
    } else if (currentSum < target) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return [];
}

const sortedArray = [1, 3, 6, 8, 11, 15];
const target = 9;
const result = findTwoSumIndices(sortedArray, target);
console.log(result);
